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

        {scopeKeys.join(', ')}
        {keys}

        <input type="text"/>


        <HotkeyScopeProvider scopeKey="my">
            <HotkeyListener hotKey="a" onKeyDown={generateConsole} enabledInFormField/>
        </HotkeyScopeProvider>

        <HotkeyScopeProvider scopeKey="my">
            <HotkeyListener hotKey="b" onKeyDown={generateConsole} enabledInFormField/>
        </HotkeyScopeProvider>
        <HotkeyListener hotKey="c" onKeyDown={generateConsole} enabledInFormField/>
        <HotkeyListener hotKey="d" onKeyDown={generateConsole} enabledInFormField/>
        <HotkeyListener hotKey="e" onKeyDown={generateConsole} enabledInFormField/>
        <HotkeyListener hotKey="f" onKeyDown={generateConsole} enabledInFormField/>
        <HotkeyListener hotKey="g" onKeyDown={generateConsole} enabledInFormField/>
        <HotkeyListener hotKey="Enter" onKeyDown={generateConsole} enabledInFormField/>
        <HotkeyListener hotKey="Escape" onKeyDown={generateConsole} enabledInFormField/>
        <HotkeyListener hotKey="Ctrl+F" onKeyDown={generateConsole} enabledInFormField/>
        <HotkeyListener hotKey="Tab" onKeyDown={generateConsole} enabledInFormField/>
        <HotkeyListener hotKey="Space" onKeyDown={generateConsole} enabledInFormField/>
    </div>;
};

export default Example;




