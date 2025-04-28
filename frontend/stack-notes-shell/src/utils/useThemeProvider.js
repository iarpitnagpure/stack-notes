import { useState } from "react";

const useThemeProvider =() => {
    const [theme, setTheme] = useState('dark');

    const handleToggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return {
        theme,
        handleToggleTheme
    };
};

export default useThemeProvider;