import { useState, useEffect } from "react";

function useDebounce(value: string, delay: number = 300) {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounced(value)
        }, delay)

        return () => clearTimeout(timeoutId)
    }, [value, delay])

    return debounced
}

export default useDebounce