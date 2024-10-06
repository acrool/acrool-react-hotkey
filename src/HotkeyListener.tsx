import {useCallback, useEffect, useRef} from 'react';
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
    stopPropagation = false,
    preventDefault = false,
    ignoreFormField = false,
    formFieldTags,
}: HotkeyListenerProps) => {
    const isComposingRef = useRef<boolean>(false);

    /**
     * 處理按鍵壓下
     */
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if(!isComposingRef.current && onKeyDown){
            generateOnKeydown(hotKey, onKeyDown, {stopPropagation, preventDefault, ignoreFormField, formFieldTags})(e);
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
