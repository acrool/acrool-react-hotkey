import Logger from '@acrool/js-logger';
import {useCallback, useEffect} from 'react';

import {useHotkey} from './HotkeyProvider';
import {HotkeyListenerProps} from './types';




const formFieldTags = ['INPUT', 'TEXTAREA', 'SELECT'];

/**
 * 透過 mount unmount 註冊 keydown 事件
 * @param onKeydown
 */
const HotkeyListener = ({
    onKeyDown,
    hotKey,
    screenKey,
    ignoreFormField
}: HotkeyListenerProps) => {

    const {checkIsCurrent} = useHotkey();

    /**
     * 解析Hotkey內容
     */
    const decodeHotkey = () => {
        return hotKey
            ?.split('+')
            .map(key => key.trim().toLowerCase()) ?? [];
    };

    /**
     * 處理按鍵壓下
     */
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        const hotkeys = decodeHotkey();
        const eventHotKey = e.key.toLowerCase();
        const activeEl = document.activeElement;

        if(e.repeat) return;
        if(e.ctrlKey && !hotkeys.includes('ctrl')) return;
        if(e.metaKey && !hotkeys.includes('cmd')) return;
        if(e.shiftKey && !hotkeys.includes('shift')) return;
        if(!hotkeys.includes(eventHotKey)) return;

        // debug
        Logger.info(HotkeyListener.name, `screenKey: ${screenKey}, tagName: ${activeEl?.tagName}`, 'hotkeys', hotkeys, [e.ctrlKey, e.altKey, e.metaKey, e.key.toLowerCase()] );

        if(!checkIsCurrent(screenKey)){
            return;
        }

        if(!ignoreFormField && (activeEl && formFieldTags.includes(activeEl.tagName))){
            return;
        }

        if(!onKeyDown){
            return;
        }

        e.stopPropagation();
        e.preventDefault();

        onKeyDown(e);
    }, [hotKey, screenKey, onKeyDown]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return null;
};

export default HotkeyListener;
