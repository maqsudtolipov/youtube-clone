import { useEffect, useRef } from 'react';

// Runs handler function when outside of element is clicked
const useOutsideClick = (handler, listenCapturing) => {
  const ref = useRef();

  // Closes modal if outside it clicked
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current?.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('click', handleClick, listenCapturing);
    return () =>
      document.removeEventListener('click', handleClick, listenCapturing);
  }, [listenCapturing, handler]);

  return { ref };
};

export { useOutsideClick };
