import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (defaultValue) => {
  const [darkMode, setDarkMode] = useLocalStorage('geceModu', false);
  const changeTheme = (value) => {
    setDarkMode(darkMode);
  };
  return [darkMode, setDarkMode];
};
