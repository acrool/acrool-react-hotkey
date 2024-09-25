// import Logger from '@acrool/js-logger';
import {useCallback, useEffect} from 'react';

import {HotkeyListenerProps} from './types';




const formFieldTags = ['INPUT', 'TEXTAREA', 'SELECT'];

/**
 * 透過 mount unmount 註冊 keydown 事件
 * @param onKeydown
 */
const HotkeyListener = ({
    onKeyDown,
    hotKey,
    ignoreFormField
}: HotkeyListenerProps) => {


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
        if(hotkeys.includes('ctrl') && !e.ctrlKey) return;
        if(hotkeys.includes('cmd') && !e.metaKey) return;
        if(hotkeys.includes('shift') && !e.shiftKey) return;
        if(!hotkeys.includes(eventHotKey)) return;

        // debug
        // Logger.info(HotkeyListener.name, `screenKey: ${screenKey}, tagName: ${activeEl?.tagName}`, 'hotkeys', hotkeys, [e.ctrlKey, e.altKey, e.metaKey, e.key.toLowerCase()] );

        // if(!checkIsCurrent(screenKey)){
        //     return;
        // }

        if(!ignoreFormField && (activeEl && formFieldTags.includes(activeEl.tagName))){
            return;
        }

        if(!onKeyDown){
            return;
        }

        e.stopPropagation();
        e.preventDefault();

        onKeyDown(e);
    }, [hotKey, onKeyDown]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return null;
};

export default HotkeyListener;
