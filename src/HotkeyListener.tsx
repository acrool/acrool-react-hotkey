import {useCallback, useEffect, useRef} from 'react';

import generateOnKeydown from './generateOnKeydown';
import {useHotkeyScopeManager} from './HotkeyScopeManagerProvider';
import {useHotkeyScope} from './HotkeyScopeProvider';
import {HotkeyListenerProps} from './types';

/**
 * 透過 mount unmount 註冊 keydown 事件
 * @param onKeyDown
 * @param hotKey
 * @param stopPropagation 停止冒泡
 * @param preventDefault 阻止預設行為
 * @param ignoreFormField 是否忽略在Form相關欄位不觸發
 * @param formFieldTags
 * @param scopeKey
 */
const HotkeyListener = ({
    onKeyDown,
    hotKey,
    stopPropagation = false,
    preventDefault = false,
    ignoreFormField = false,
    formFieldTags,
}: HotkeyListenerProps) => {
    // 避免輸入法輸入中
    const isComposingRef = useRef<boolean>(false);

    const {checkIsCurrentScope} = useHotkeyScopeManager();
    const {scopeKey} = useHotkeyScope();

    /**
     * 處理按鍵壓下
     */
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        console.log(scopeKey, checkIsCurrentScope(scopeKey));
        if(
            !isComposingRef.current &&
            checkIsCurrentScope(scopeKey) &&
            onKeyDown
        ){
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
