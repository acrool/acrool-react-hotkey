import { HotkeyListener } from '@acrool/react-hotkey';
import AcroolTable from '@acrool/react-table';
import React from "react";



const generateConsole = (e: React.KeyboardEvent) => {
    console.log(`${e.key} / ${e.code} / ${e.ctrlKey}`);
};

const Example = () => {

    return <div style={{display: 'flex', gap: '10px', alignItems: 'flex-start', width: '100%'}}>
        <HotkeyListener hotKey="a" onKeyDown={generateConsole}/>
        <HotkeyListener hotKey="b" onKeyDown={generateConsole}/>
        <HotkeyListener hotKey="c" onKeyDown={generateConsole}/>
        <HotkeyListener hotKey="d" onKeyDown={generateConsole}/>
        <HotkeyListener hotKey="e" onKeyDown={generateConsole}/>
        <HotkeyListener hotKey="f" onKeyDown={generateConsole}/>
        <HotkeyListener hotKey="g" onKeyDown={generateConsole}/>
        <HotkeyListener hotKey="Enter" onKeyDown={generateConsole}/>
        <HotkeyListener hotKey="Escape" onKeyDown={generateConsole}/>
        <HotkeyListener hotKey="Ctrl+F" onKeyDown={generateConsole}/>
        <HotkeyListener hotKey="Tab" onKeyDown={generateConsole}/>
        <HotkeyListener hotKey="Space" onKeyDown={generateConsole}/>

    </div>;
};

export default Example;




