import React from 'react';

import {formFieldTags} from './config';
import {EFormFieldTag, IKeydownOptions} from './types';

/**
 * 解析Hotkey內容
 */
const decodeHotkey = (hotKey: string) => {
    return hotKey
        ?.split('+')
        .map(key => key.trim().toLowerCase()) ?? [];
};



const getOptionDefault = (options?: IKeydownOptions) => {
    return {
        formFieldTags: options?.formFieldTags ?? formFieldTags,
        enabledInFormField: options?.enabledInFormField ?? true,

        preventDefault: options?.preventDefault,
        stopPropagation: options?.stopPropagation,
    };
};

/**
 * 處理鍵盤按下Enter
 * @param hotkey
 * @param onKeyDown
 * @param options
 */
const generateOnKeydown = (
    hotkey: string|string[],
    onKeyDown: (event: React.KeyboardEvent) => void,
    options?: IKeydownOptions,
) => {
    return (e: React.KeyboardEvent) => {

        const _hotkeys = Array.isArray(hotkey) ? hotkey : [hotkey];
        for(const _hotkey of _hotkeys){

            const _options = getOptionDefault(options);

            const hotkeys = decodeHotkey(_hotkey);
            const eventHotKey = e.key.toLowerCase();
            const eventHotCode = e.code.toLowerCase();
            const activeEl = (document.activeElement) as unknown as {tagName: EFormFieldTag}|undefined;

            if (e.repeat) {
                continue;
            }

            // 檢查修飾鍵
            const requiresCtrl = hotkeys.includes('ctrl');
            const requiresMeta = hotkeys.includes('cmd');
            const requiresShift = hotkeys.includes('shift');

            const ctrlMatched = requiresCtrl === e.ctrlKey;
            const metaMatched = requiresMeta === e.metaKey;
            const shiftMatched = requiresShift === e.shiftKey;

            // 檢查普通鍵是否匹配 (包含空白鍵，使用 e.code 判斷)
            const keyMatched = hotkeys.includes(eventHotKey) || hotkeys.includes(eventHotCode);

            // 如果修飾鍵或普通鍵不符合則退出
            if (!keyMatched || !ctrlMatched || !metaMatched || !shiftMatched) {
                continue;
            }

            // 如果在表單欄位不可使用，則檢查 是否正在表單欄位
            if (!_options.enabledInFormField && (activeEl && formFieldTags.includes(activeEl.tagName))) {
                continue;
            }

            // 替換預設行為
            if(_options.preventDefault){
                e.preventDefault();
            }

            // 阻止冒泡
            if(_options.stopPropagation){
                e.stopPropagation();
            }

            if (!onKeyDown) {
                continue;
            }

            onKeyDown(e);
            break;
        }

    };
};

export default generateOnKeydown;
