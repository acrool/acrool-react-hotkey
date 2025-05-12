import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import generateOnKeydown from './generateOnKeydown';
import { EFormFieldTag } from './types';

describe('generateOnKeydown', () => {
  function createEvent({
    key,
    code,
    ctrlKey = false,
    metaKey = false,
    shiftKey = false,
    repeat = false,
    targetTagName = 'DIV',
  }: {
    key: string;
    code: string;
    ctrlKey?: boolean;
    metaKey?: boolean;
    shiftKey?: boolean;
    repeat?: boolean;
    targetTagName?: string;
  }) {
    // 模擬 activeElement
    Object.defineProperty(document, 'activeElement', {
      value: { tagName: targetTagName },
      configurable: true,
    });
    return {
      key,
      code,
      ctrlKey,
      metaKey,
      shiftKey,
      repeat,
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    } as unknown as React.KeyboardEvent;
  }

  it('應該在普通鍵匹配時觸發 onKeyDown', () => {
    const onKeyDown = jest.fn();
    const handler = generateOnKeydown('a', onKeyDown);
    const event = createEvent({ key: 'a', code: 'KeyA' });
    handler(event);
    expect(onKeyDown).toBeCalled();
  });

  it('應該在修飾鍵匹配時觸發 onKeyDown', () => {
    const onKeyDown = jest.fn();
    const handler = generateOnKeydown('ctrl+a', onKeyDown);
    const event = createEvent({ key: 'a', code: 'KeyA', ctrlKey: true });
    handler(event);
    expect(onKeyDown).toBeCalled();
  });

  it('不匹配修飾鍵時不觸發 onKeyDown', () => {
    const onKeyDown = jest.fn();
    const handler = generateOnKeydown('ctrl+a', onKeyDown);
    const event = createEvent({ key: 'a', code: 'KeyA', ctrlKey: false });
    handler(event);
    expect(onKeyDown).not.toBeCalled();
  });

  it('在表單欄位且 enabledInFormField=false 時不觸發', () => {
    const onKeyDown = jest.fn();
    const handler = generateOnKeydown('a', onKeyDown, { enabledInFormField: false });
    const event = createEvent({ key: 'a', code: 'KeyA', targetTagName: EFormFieldTag.Input });
    handler(event);
    expect(onKeyDown).not.toBeCalled();
  });

  it('preventDefault 與 stopPropagation 會被呼叫', () => {
    const onKeyDown = jest.fn();
    const handler = generateOnKeydown('a', onKeyDown, { preventDefault: true, stopPropagation: true });
    const event = createEvent({ key: 'a', code: 'KeyA' });
    handler(event);
    expect(event.preventDefault).toBeCalled();
    expect(event.stopPropagation).toBeCalled();
  });

  it('e.repeat 為 true 時不觸發', () => {
    const onKeyDown = jest.fn();
    const handler = generateOnKeydown('a', onKeyDown);
    const event = createEvent({ key: 'a', code: 'KeyA', repeat: true });
    handler(event);
    expect(onKeyDown).not.toBeCalled();
  });

  it('多組 hotkey 任一組匹配即觸發', () => {
    const onKeyDown = jest.fn();
    const handler = generateOnKeydown(['a', 'b'], onKeyDown);
    const event = createEvent({ key: 'b', code: 'KeyB' });
    handler(event);
    expect(onKeyDown).toBeCalled();
  });
});
