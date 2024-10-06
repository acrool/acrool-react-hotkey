import React, {createContext, ReactNode, useContext, useEffect} from 'react';

import {useHotkeyScopeManager} from './HotkeyScopeManagerProvider';


interface IContextProps {
    scopeKey?: string|undefined,
}

export const HotkeyScopeProviderContext = createContext<IContextProps>({});
export const useHotkeyScope = () => useContext(HotkeyScopeProviderContext);




interface IProps {
    children: ReactNode,
    scopeKey: string,
}

const HotkeyScopeProvider = ({
    children,
    scopeKey
}: IProps) => {

    const {enterScope, leaveScope} = useHotkeyScopeManager();

    useEffect(() => {
        enterScope(scopeKey);

        return () => {
            leaveScope(scopeKey);
        };
    }, []);


    return (
        <HotkeyScopeProviderContext.Provider value={{
            scopeKey,
        }}>
            {children}
        </HotkeyScopeProviderContext.Provider>
    );
};

export default HotkeyScopeProvider;

