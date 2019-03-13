import { useRef, useLayoutEffect } from 'react';

const useAnimationFrame = (callback, lines) => {
  const frameRef = useRef();

  const loop = () => {
    frameRef.current = window.requestAnimationFrame(loop);
    callback();
  };

  useLayoutEffect(() => {
    frameRef.current = window.requestAnimationFrame(loop);

    return () => window.cancelAnimationFrame(frameRef.current);
  }, [lines]);
};

export default useAnimationFrame;
