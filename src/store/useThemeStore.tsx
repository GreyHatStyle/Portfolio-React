import { create } from "zustand"

export type Theme = "light" | "dark"

type ThemeStoreType = {
    theme: Theme,
    initializeTheme: () => void,
    setTheme: (theme_: Theme) => void,
    themeToggle: () => void
}

export const useThemeStore = create<ThemeStoreType>( (set, get) => ({
    theme: "light",
    initializeTheme: () => {
        set(() => ({
            theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
        }));

        document.body.className = get().theme;
    }, 
    setTheme: (theme_: Theme) => {
        set(() => ({
            theme: theme_,
        }))
        document.body.className = get().theme;
    },

    themeToggle: () => {
        set( (state) => ({
            theme: state.theme === "light" ? "dark" : "light",
        }))
        document.body.className = get().theme;
    }
}))