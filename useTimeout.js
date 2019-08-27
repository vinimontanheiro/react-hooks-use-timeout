import { useEffect, useRef, useCallback, useState } from 'react';

const useTimeout = (callback, delay = 0, deps = []) => {
  const [start, setStart] = useState(false);
  const [id, setId] = useState(null);
  const callbackRef = useRef();

  const run = useCallback(() => {
    setStart(true);
  }, [callback, start, ...deps]);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback, ...deps]);

  useEffect(() => {
    if(start){
      setStart(false);
      const tick = () => {
        callbackRef.current();
      };
      const currentId = setTimeout(tick, delay);
      setId(currentId);
    }
    return () => !!id && clearTimeout(id);
  }, [start, id]);

  return {
    id,
    run
  };
};

export default useTimeout;
