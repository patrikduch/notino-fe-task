import { useEffect } from 'react';

/**
 * @function useDidMount Hooks did mount life-cycle method.
 * @author Patrik Duch
 * @param callback Function that is going to be called.
 */
const useDidMount = (callback: () => void): void => {
    useEffect(() => {
        callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useDidMount;