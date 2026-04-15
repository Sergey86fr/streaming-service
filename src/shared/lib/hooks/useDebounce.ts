import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState("");
  useEffect(() => {
    const timerId = setTimeout(() => {
        setDebouncedValue(value);
      
    }, delay);
    
    return () => clearTimeout(timerId);
  }, [value, delay]);
  return debouncedValue;
};
