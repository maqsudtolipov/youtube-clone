import { useEffect, useRef } from 'react';

// Runs handler function when outside of element is clicked
const useOutsideClick = (handler) => {
  const ref = useRef();

  // Closes modal if outside it clicked
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current?.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [handler]);

  return { ref };
};

export { useOutsideClick };
