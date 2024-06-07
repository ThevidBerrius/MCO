export const useLocalStorage = (key) => {
    const initializeItem = () => {
        try {
            window.localStorage.setItem(key, JSON.stringify(""));
        } catch (error) {
            console.log(error);
        }
    }

    const setItem = (value) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    }

    const getItem = () => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : undefined;
        } catch (error) {
            console.log(error);
        }
    }

    const removeItem = () => {
        try {
            window.localStorage.removeItem(key);
            window.localStorage.setItem(key, JSON.stringify([""]));
        } catch (error) {
            console.log(error);
        }
    }

    const clearStorage = () => {
        window.localStorage.clear();
    }

    return { setItem, getItem, removeItem, clearStorage, initializeItem }
}