
export interface IKeydownOptions {
    ignoreFormField?: boolean
    formFieldTags?: EFormFieldTag[]
    preventDefault?: boolean
    stopPropagation?: boolean
}


export interface HotkeyListenerProps extends Omit<IKeydownOptions, 'stopPropagation'>{
    onKeyDown?: (e: React.KeyboardEvent) => void
    hotKey: string|string[]
    scopeKey?: string
}



export enum EKeyboardKey {
    Escape = 'Escape',
    Enter = 'Enter',
    Space = 'Space',
    Tab = 'Tab',
    ShiftAndTab = 'Shift+Tab',
    ArrowUp = 'ArrowUp',
    ArrowDown = 'ArrowDown',
    ArrowLeft = 'ArrowLeft',
    ArrowRight = 'ArrowRight',
}

export enum EFormFieldTag {
    Input = 'INPUT',
    Textarea = 'TEXTAREA',
    Select = 'SELECT',
    Button = 'BUTTON',
}


export type TKeyboardEvent = (e: React.KeyboardEvent) => void;
