import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update debouncedValue after delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: Cancel the timer if value changes before delay ends
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]); // Only re-run if value or delay changes

  return debouncedValue;
}