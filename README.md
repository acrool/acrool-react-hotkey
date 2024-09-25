# Acrool React Hotkey

<a href="https://acrool-react-hotkey.pages.dev/" title="Acrool React Hotkey - This is a hotkey component for ReactJs">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-hotkey/main/example/public/og.webp" alt="Acrool React Hotkey Logo"/>
</a>

<p align="center">
    This is a toast message function for React development notifications
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-hotkey.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-hotkey)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-hotkey?style=for-the-badge)](https://github.com/acrool/@acrool/react-hotkey/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-hotkey?style=for-the-badge)](https://github.com/acrool/react-hotkey/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-hotkey.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-hotkey)
[![npm](https://img.shields.io/npm/dt/@acrool/react-hotkey.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-hotkey)

</div>




## Features

- Supports dom onKeyDown
- Supports not repeat onKeyDown
- componentOnMount add listen, componentUnMount remove listen

## Install

```bash
yarn add @acrool/react-hotkey
```

## Usage

```tsx
import {generateOnKeydown, HotkeyListener} from '@acrool/react-hotkey';

const Example = () => {
    const handleSave = () => {
        // white yourr code
    }
    const handleCancel = () => {
        // white yourr code
    }
    
    /**
     * Save
     */
    const handleOnKeyDown = (e) => {
        generateOnKeydown('ctrl+enter', handleSave)(e);
        generateOnKeydown('escape', handleCancel)(e);
    };
    
    return (<>
            <input type="text" onKeyDown={handleOnKeyDown}/>
            <HotkeyListener hotKey="ctrl+," onKeyDown={() => console.log('to setting')} />
        </>
    );
};
```

There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-hotkey/main/play-in-example-button.svg)](https://acrool-react-hotkey.pages.dev)


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)
