import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return [darkMode, toggleDarkMode];
};

export default useDarkMode;