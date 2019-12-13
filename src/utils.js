import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedItem, setStoredItem] = useState(
        localStorage.getItem(key) ? JSON.stringify(localStorage.getItem(key)) : initialValue
    );

    const setValue = value => {
        setStoredItem(value);
        localStorage.setItem(key, JSON.parse(value));
    };



    return [storedItem, setValue];
};

export const useDarkMode = darkBool => {
    const [isDark, setDark] = useLocalStorage('dark', darkBool);

    const setDarkMode = newDarkBool => {
        setDark(newDarkBool);

        switch(newDarkBool === true){
            case true: document.body.classList.add('dark-mode');
                       break;
            case false: document.body.classList.remove('dark-mode');
                        break;
            default: return new Error('useDarkMode hook error: passed value must be boolean');
        };
    };

    return [isDark, setDarkMode];
}