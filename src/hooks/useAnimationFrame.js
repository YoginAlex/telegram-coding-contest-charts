import { useRef, useLayoutEffect } from 'react';

const useAnimationFrame = (callback, lines) => {
  // const callbackRef = useRef(callback);
  const frameRef = useRef();

  const loop = () => {
    frameRef.current = window.requestAnimationFrame(loop);
    // const cb = callbackRef.current;
    // cb();
    callback();
  };

  useLayoutEffect(() => {
    frameRef.current = window.requestAnimationFrame(loop);

    return () => window.cancelAnimationFrame(frameRef.current);
  }, [lines]);
};

export default useAnimationFrame;
