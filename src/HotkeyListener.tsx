// import Logger from '@acrool/js-logger';
import {useCallback, useEffect} from 'react';

import {HotkeyListenerProps} from './types';
import {generateOnKeydown} from './utils';

/**
 * 透過 mount unmount 註冊 keydown 事件
 * @param onKeyDown
 * @param hotKey
 * @param stopPropagation 停止冒泡
 * @param preventDefault 阻止預設行為
 * @param ignoreFormField 是否忽略在Form相關欄位不觸發
 * @param formFieldTags
 */
const HotkeyListener = ({
    onKeyDown,
    hotKey,
    stopPropagation = true,
    preventDefault = true,
    ignoreFormField = false,
    formFieldTags,
}: HotkeyListenerProps) => {
    /**
     * 處理按鍵壓下
     */
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if(onKeyDown){
            generateOnKeydown(hotKey, onKeyDown, {stopPropagation, preventDefault, ignoreFormField, formFieldTags})(e);
        }

    }, [hotKey, onKeyDown]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown as any);
        return () => {
            document.removeEventListener('keydown', handleKeyDown as any);
        };
    }, [handleKeyDown]);

    return null;
};

export default HotkeyListener;
