
export interface HotkeyListenerProps{
    onKeyDown?: (e: React.KeyboardEvent) => void
    hotKey: string
    ignoreFormField?: boolean
}

export type TKeyboardEvent = (e: React.KeyboardEvent) => void;
