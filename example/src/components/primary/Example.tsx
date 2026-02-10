import 'react-simple-keyboard/build/css/index.css';

import {Flex} from '@acrool/react-grid';
import {HotkeyListener} from '@acrool/react-hotkey';
import React, {useState} from 'react';
import Keyboard from 'react-simple-keyboard';

const layout = {
    default: [
        '` 1 2 3 4 5 6 7 8 9 0 - = {backspace}',
        'tab q w e r t y u i o p [ ] \\',
        '{capslock} a s d f g h j k l ; \' enter',
        '{shiftleft} z x c v b n m , . /',
        '{controlleft} {metaleft} space',
    ],
};

const Example = () => {
    const [keys, setKeys] = useState<string>();

    const generateConsole = (e: React.KeyboardEvent) => {
        setKeys(`${e.key} (${e.code}) / ${e.ctrlKey}`);
    };

    const keyData = [
        // numbers
        ...'0123456789',

        // letters
        ...'abcdefghijklmnopqrstuvwxyz',

        // symbols → 用 code
        'backquote',
        'minus',
        'equal',
        'bracketleft',
        'bracketright',
        'backslash',
        'semicolon',
        'quote',
        'comma',
        'period',
        'slash',

        // function
        'backspace',
        'tab',
        'capslock',
        'enter',
        'space',
        'escape',

        // modifier（ctrl+control / cmd+meta 才能單獨按並 log，因套件修飾鍵檢查）
        'shift',
        'ctrl+control',
        'cmd+meta',

        // 組合鍵
        'ctrl+f',
    ];

    return (
        <Flex className="flex-column gap-4" style={{width: '560px', color: 'gray'}}>
            <div>Currently assigned hotkeys：</div>
            <ul style={{listStyleType: 'disc', listStylePosition: 'inside'}}>
                <li>Single Key: The key displayed on the virtual keyboard</li>
                <li>Combination Key：Ctrl+f</li>
            </ul>

            <div>This virtual keyboard will light up the key you pressed on your keyboard.</div>
            <Keyboard
                layoutName="default"
                layout={layout}
                display={{
                    '{backspace}': 'backspace',
                    '{capslock}': 'caps',
                    '{shiftleft}': 'shift',
                    '{controlleft}': 'ctrl',
                    '{metaleft}': 'command',
                }}
                physicalKeyboardHighlight
            />

            <Flex className="flex-column gap-4">
                <div>key (code) / Ctrl held when pressed (true or false) :</div>
                <div>{keys}</div>
                {keyData.map(o => <HotkeyListener key={o} hotKey={o} onKeyDown={generateConsole} preventDefault/>)}
            </Flex>
        </Flex>
    );
};

export default Example;
