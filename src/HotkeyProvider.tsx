import Logger from '@acrool/js-logger';
import React, {createContext, useContext} from 'react';


interface IContextProps {
    checkIsCurrent: (screenKey?: string) => boolean
}

export const HotkeyProviderContext = createContext<IContextProps>({
    checkIsCurrent: (screenKey?: string) => {
        Logger.warning('No checkIsCurrent method detected, did you embed your app with Acrool/HotkeyProvider?');
        return false;
    },
});

export const HotkeyProviderConsumer = HotkeyProviderContext.Consumer;

export const useHotkey = () => useContext(HotkeyProviderContext);
