import React from 'react';



enum EKeyboardKey {
    Escape = 'Escape',
    Enter = 'Enter',
    Tab = 'Tab',
}
const formFieldTags = ['INPUT', 'TEXTAREA', 'SELECT'];


/**
 * 解析Hotkey內容
 */
const decodeHotkey = (hotKey: string) => {
    return hotKey
        ?.split('+')
        .map(key => key.trim().toLowerCase()) ?? [];
};


/**
 * 處理鍵盤按下Enter
 * @param hotkey
 * @param onKeyDown
 * @param ignoreFormField
 */
export const generateOnKeydown = (hotkey: string, onKeyDown: (event: React.KeyboardEvent) => void, ignoreFormField = true) => {
    return (e: React.KeyboardEvent) => {
        const hotkeys = decodeHotkey(hotkey);
        const eventHotKey = e.key.toLowerCase();
        const activeEl = document.activeElement;

        if(e.repeat) return;
        if(hotkeys.includes('ctrl') && !e.ctrlKey) return;
        if(hotkeys.includes('cmd') && !e.metaKey) return;
        if(hotkeys.includes('shift') && !e.shiftKey) return;
        if(!hotkeys.includes(eventHotKey)) return;

        // debug
        // Logger.info(HotkeyListener.name, `screenKey: ${screenKey}, tagName: ${activeEl?.tagName}`, 'hotkeys', hotkeys, [e.ctrlKey, e.altKey, e.metaKey, e.key.toLowerCase()] );

        if(!ignoreFormField && (activeEl && formFieldTags.includes(activeEl.tagName))){
            return;
        }

        if(!onKeyDown){
            return;
        }

        e.stopPropagation();
        e.preventDefault();

        onKeyDown(e);
    };
};
