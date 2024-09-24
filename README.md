# Acrool React Hotkey

<a href="https://acrool-react-hotkey.pages.dev/" title="Acrool React Hotkey - This is a hotkey function for React development loading hotkey">
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

- Supports queue hotkey list
- Plug and unplug using `@acrool/react-portal` and `framer-motion`

## Install

```bash
yarn add @acrool/react-hotkey
```

## Usage

add in your index.tsx
```tst
import "@acrool/react-hotkey/dist/index.css";
```

add in your App.tsx

```tsx
import {HotkeyPortal} from "@acrool/react-hotkey";

const App = () => {
    return (
        <div>
            <BaseUsed/>
            <HotkeyPortal
                isVisibleQueueKey={false}
                renderLoader={<Loader/>}
                defaultMessage="Loading..."
            />
        </div>
    );
};
```

then in your page

```tsx
import {hotkey} from '@acrool/react-hotkey';
import {useEffect} from "react";

const Example = () => {

    useEffect(() => {
        hotkey.show();
        
        setTimeout(() => {
            hotkey.hide();
        }, 3000)
    }, []);

    return (
        <div>
            sample page
        </div>
    );
};
```

- hotkey.show
- hotkey.hide
- toast.hideAll


There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-hotkey/main/play-in-example-button.svg)](https://acrool-react-hotkey.pages.dev)


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)
