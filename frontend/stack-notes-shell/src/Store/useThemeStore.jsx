import { create } from "zustand";

const useThemeStore = create((set, get) => ({
    theme: "dark",
    toggleTheme: () => {
        const prevTheme = get().theme;
        const newTheme = prevTheme === "dark" ? "light" : "dark";
        console.log(`[Zustand] Toggling theme: ${prevTheme} → ${newTheme}`);
        
        set({ theme: newTheme });
    },
}));

export default useThemeStore;
