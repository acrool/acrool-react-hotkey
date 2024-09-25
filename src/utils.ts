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

        if (e.repeat) return;

        // 檢查修飾鍵
        const requiresCtrl = hotkeys.includes('ctrl');
        const requiresMeta = hotkeys.includes('cmd');
        const requiresShift = hotkeys.includes('shift');

        const ctrlMatched = requiresCtrl === e.ctrlKey;
        const metaMatched = requiresMeta === e.metaKey;
        const shiftMatched = requiresShift === e.shiftKey;

        // 檢查普通鍵是否匹配
        const keyMatched = hotkeys.includes(eventHotKey);

        // 如果修飾鍵或普通鍵不符合則退出
        if (!keyMatched || !ctrlMatched || !metaMatched || !shiftMatched) {
            return;
        }

        // 檢查是否忽略輸入框等表單元素
        if (!ignoreFormField && (activeEl && formFieldTags.includes(activeEl.tagName))) {
            return;
        }

        if (!onKeyDown) {
            return;
        }

        e.stopPropagation();
        e.preventDefault();

        onKeyDown(e);
    };
};
