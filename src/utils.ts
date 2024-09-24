import React from 'react';



enum EKeyboardKey {
    Escape = 'Escape',
    Enter = 'Enter',
    Tab = 'Tab',
}


/**
 * 處理鍵盤按下Enter
 * @param cb
 */
export const generateCtrlEnter = (cb: (event?: React.KeyboardEvent) => void) => {
    return (e: React.KeyboardEvent) => {
        if(e.ctrlKey && e.key === EKeyboardKey.Enter && cb){
            (document.activeElement as HTMLElement).blur();
            e.stopPropagation();
            e.preventDefault();
            cb(e);
        }
    };
};

/**
 * 處理鍵盤按下ESC
 * @param cb
 */
export const generateEsc = (cb: (event?: React.KeyboardEvent) => void) => {
    return (e: React.KeyboardEvent) => {
        if(e.key === EKeyboardKey.Escape && cb){
            e.stopPropagation();
            e.preventDefault();
            cb(e);
        }
    };
};
