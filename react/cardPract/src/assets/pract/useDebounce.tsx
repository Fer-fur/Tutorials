import { useEffect, useState } from "react";

export default function useDebounce( value: string, delay: number ) {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect( () => {
        const debounce = setTimeout( () => {
            setDebouncedValue(value);
            console.log("timed out");
        }, delay)

        return () => {
            clearTimeout(debounce)
        }
    
    }, [value, delay])

    return debouncedValue;
}