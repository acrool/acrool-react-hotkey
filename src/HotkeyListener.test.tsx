import {render} from '@testing-library/react';
import React from 'react';

import HotkeyListener from './HotkeyListener';

// 模擬 keydown 事件
function fireKeydownEvent(options: Partial<KeyboardEvent> = {}) {
    const event = new window.KeyboardEvent('keydown', {
        key: options.key || '',
        code: options.code || '',
        ctrlKey: options.ctrlKey || false,
        metaKey: options.metaKey || false,
        shiftKey: options.shiftKey || false,
        repeat: options.repeat || false,
        bubbles: true,
        cancelable: true,
    });
    document.dispatchEvent(event);
    return event;
}

describe('HotkeyListener', () => {
    it('應該在指定按鍵時觸發 onKeyDown', () => {
        const onKeyDown = jest.fn();
        render(
            <HotkeyListener hotKey="a" onKeyDown={onKeyDown} />
        );
        fireKeydownEvent({key: 'a', code: 'KeyA'});
        expect(onKeyDown).toBeCalled();
    });

    it('應該支援組合鍵', () => {
        const onKeyDown = jest.fn();
        render(
            <HotkeyListener hotKey="ctrl+a" onKeyDown={onKeyDown} />
        );
        fireKeydownEvent({key: 'a', code: 'KeyA', ctrlKey: true});
        expect(onKeyDown).toBeCalled();
    });

    it('輸入法組合狀態下不觸發 onKeyDown', () => {
        const onKeyDown = jest.fn();
        render(
            <HotkeyListener hotKey="a" onKeyDown={onKeyDown} />
        );
        // 模擬 compositionstart
        document.dispatchEvent(new window.CompositionEvent('compositionstart'));
        fireKeydownEvent({key: 'a', code: 'KeyA'});
        expect(onKeyDown).not.toBeCalled();
        // 模擬 compositionend
        document.dispatchEvent(new window.CompositionEvent('compositionend'));
        fireKeydownEvent({key: 'a', code: 'KeyA'});
        expect(onKeyDown).toBeCalled();
    });

    it('preventDefault 會被呼叫', () => {
        const onKeyDown = jest.fn();
        render(
            <HotkeyListener hotKey="a" onKeyDown={onKeyDown} preventDefault />
        );
        const event = fireKeydownEvent({key: 'a', code: 'KeyA'});
        expect(event.defaultPrevented).toBe(true);
    });

    it('enabledInFormField=false 時在 input 不觸發', () => {
        const onKeyDown = jest.fn();
        render(
            <HotkeyListener hotKey="a" onKeyDown={onKeyDown} enabledInFormField={false} />
        );
        // 模擬 activeElement 為 input
        Object.defineProperty(document, 'activeElement', {
            value: {tagName: 'INPUT'},
            configurable: true,
        });
        fireKeydownEvent({key: 'a', code: 'KeyA'});
        expect(onKeyDown).not.toBeCalled();
    });
});
