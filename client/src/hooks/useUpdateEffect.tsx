import { MutableRefObject, useEffect, useRef } from 'react';

const useUpdateEffect = (effect, dependencies = []) => {
  const isInitialMount: MutableRefObject<boolean> = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
    return () => {
      isInitialMount.current = false;
    };
  }, dependencies);
};

export default useUpdateEffect;
