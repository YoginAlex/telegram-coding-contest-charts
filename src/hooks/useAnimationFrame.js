import { useRef, useLayoutEffect } from 'react';

const useAnimationFrame = (callback) => {
  const callbackRef = useRef(callback);
  const frameRef = useRef();

  const loop = () => {
    frameRef.current = window.requestAnimationFrame(loop);
    const cb = callbackRef.current;
    cb();
  };

  useLayoutEffect(() => {
    frameRef.current = window.requestAnimationFrame(loop);
    return () => window.cancelAnimationFrame(frameRef.current);
  }, []);
};

export default useAnimationFrame;
