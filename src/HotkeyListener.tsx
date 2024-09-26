// import Logger from '@acrool/js-logger';
import {useCallback, useEffect} from 'react';

import {HotkeyListenerProps} from './types';
import {generateOnKeydown} from './utils';

/**
 * 透過 mount unmount 註冊 keydown 事件
 * @param onKeydown
 */
const HotkeyListener = ({
    onKeyDown,
    hotKey,
    stopPropagation,
    preventDefault,
    ignoreFormField,
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
