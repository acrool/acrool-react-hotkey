import {useCallback, useEffect, useRef} from 'react';

import generateOnKeydown from './generateOnKeydown';
import {HotkeyListenerProps} from './types';

/**
 * 透過 mount unmount 註冊 keydown 事件
 * @param onKeyDown
 * @param hotKey
 * @param stopPropagation 停止冒泡
 * @param preventDefault 阻止預設行為
 * @param enabledInFormField 如果為true, 則在表單欄位(input, textarea, select..) 依然可使用
 * @param formFieldTags
 */
const HotkeyListener = ({
    onKeyDown,
    hotKey,
    preventDefault = false,
    enabledInFormField = false,
    formFieldTags,
}: HotkeyListenerProps) => {
    // 避免輸入法輸入中
    const isComposingRef = useRef<boolean>(false);

    /**
     * 處理按鍵壓下
     */
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if(
            !isComposingRef.current &&
            onKeyDown
        ){
            generateOnKeydown(hotKey, onKeyDown, {preventDefault, enabledInFormField, formFieldTags})(e);
        }

    }, [hotKey, onKeyDown]);


    /**
     * 輸入法開始輸入
     */
    const handleCompositionStart = useCallback(() => {
        isComposingRef.current = true;
    }, []);

    /**
     * 輸入法開始結束
     */
    const handleCompositionEnd = useCallback(() => {
        isComposingRef.current = false;
    }, []);


    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown as any);
        document.addEventListener('compositionstart', handleCompositionStart);
        document.addEventListener('compositionend', handleCompositionEnd);

        return () => {
            document.removeEventListener('keydown', handleKeyDown as any);
            document.removeEventListener('compositionstart', handleCompositionStart);
            document.removeEventListener('compositionend', handleCompositionEnd);
        };
    }, [handleKeyDown]);

    return null;
};

export default HotkeyListener;
