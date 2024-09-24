
export interface HotkeyListenerProps{
    onKeyDown?: (e: KeyboardEvent) => void
    hotKey?: string
    screenKey?: string
    ignoreFormField?: boolean
}

