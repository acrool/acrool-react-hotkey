import {HotkeyListener, HotkeyScopeProvider} from '@acrool/react-hotkey';
import {useHotkeyScopeManager} from '@acrool/react-hotkey';
import React, {useState} from 'react';



const Example = () => {

    const [keys, setKeys] = useState<string>();

    const {scopeKeys} = useHotkeyScopeManager();


    const generateConsole = (e: React.KeyboardEvent) => {
        setKeys(`${e.key}(${e.code}) / ${e.ctrlKey}`);

    };


    return <div style={{display: 'flex', gap: '10px', alignItems: 'flex-start', width: '100%'}}>

        [{scopeKeys.join(', ')}]
        {keys}

        <input type="text"/>


        <HotkeyScopeProvider scopeKey="my">
            <HotkeyListener hotKey="a" onKeyDown={generateConsole} ignoreFormField/>
        </HotkeyScopeProvider>

        <HotkeyScopeProvider scopeKey="mya">
            <HotkeyListener hotKey="b" onKeyDown={generateConsole} ignoreFormField/>
        </HotkeyScopeProvider>
        <HotkeyListener hotKey="c" onKeyDown={generateConsole} ignoreFormField/>
        <HotkeyListener hotKey="d" onKeyDown={generateConsole} ignoreFormField/>
        <HotkeyListener hotKey="e" onKeyDown={generateConsole} ignoreFormField/>
        <HotkeyListener hotKey="f" onKeyDown={generateConsole} ignoreFormField/>
        <HotkeyListener hotKey="g" onKeyDown={generateConsole} ignoreFormField/>
        <HotkeyListener hotKey="Enter" onKeyDown={generateConsole} ignoreFormField/>
        <HotkeyListener hotKey="Escape" onKeyDown={generateConsole} ignoreFormField/>
        <HotkeyListener hotKey="Ctrl+F" onKeyDown={generateConsole} ignoreFormField/>
        <HotkeyListener hotKey="Tab" onKeyDown={generateConsole} ignoreFormField/>
        <HotkeyListener hotKey="Space" onKeyDown={generateConsole} ignoreFormField/>
    </div>;
};

export default Example;




