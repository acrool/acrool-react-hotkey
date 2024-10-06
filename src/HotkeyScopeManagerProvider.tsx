import Logger from '@acrool/js-logger';
import React, {createContext, ReactNode, useCallback, useContext, useId, useState} from 'react';

import {removeByIndex} from './utils';


interface IContextProps {
    checkIsCurrentScope: (scopeKey?: string) => boolean
    leaveScope: (scopeKey: string) => void
    enterScope: (scopeKey: string) => void
    currentScope: () => string|undefined
    scopeKeys: string[],
}

export const HotkeyScopeManagerProviderContext = createContext<IContextProps>({
    currentScope: () => {
        Logger.warning('No currentScope method detected, did you embed your app with Acrool/HotkeyScopeManagerProvider?');
        return undefined;
    },
    checkIsCurrentScope: () => {
        Logger.warning('No checkIsCurrentScope method detected, did you embed your app with Acrool/HotkeyScopeManagerProvider?');
        return false;
    },
    enterScope: () => Logger.warning('No enterScope method detected, did you embed your app with Acrool/HotkeyScopeManagerProvider?'),
    leaveScope: () => Logger.warning('No leaveScope method detected, did you embed your app with Acrool/HotkeyScopeManagerProvider?'),
    scopeKeys: [],
});

export const HotkeyScopeManagerProviderConsumer = HotkeyScopeManagerProviderContext.Consumer;

export const useHotkeyScopeManager = () => useContext(HotkeyScopeManagerProviderContext);



interface IProps {
    children: ReactNode,
}

const HotkeyScopeManagerProvider = ({
    children,
}: IProps) => {
    const [scopeKeys, setScopeKeys] = useState<string[]>([]);

    /**
     * 進入
     * @param scopeKey
     */
    const enterScope = useCallback((scopeKey: string) => {
        setScopeKeys(curr => curr.concat(scopeKey));
    }, []);


    /**
     * 離開
     * @param scopeKey
     */
    const leaveScope = useCallback((scopeKey: string) => {
        setScopeKeys(curr => {
            const currIndex = curr.findIndex(key => key === scopeKey);
            return removeByIndex(curr, currIndex);
        });

    }, []);


    /**
     * 確認是否在同一個作用區
     * @param scopeKey
     */
    const checkIsCurrentScope = useCallback((scopeKey?: string) => {
        if(scopeKey === undefined){
            return scopeKeys.length === 0;
        }
        return currentScope() === scopeKey;
    }, [scopeKeys]);


    /**
     * 取得目前層
     */
    const currentScope = useCallback(() => {
        return scopeKeys[scopeKeys.length - 1];
    }, [scopeKeys]);



    return (
        <HotkeyScopeManagerProviderContext.Provider value={{
            currentScope,
            enterScope,
            leaveScope,
            checkIsCurrentScope,
            scopeKeys
        }}>
            {children}
        </HotkeyScopeManagerProviderContext.Provider>
    );
};

export default HotkeyScopeManagerProvider;

