import { MutableRefObject, useEffect, useRef } from 'react';

const useUpdateEffect = (effect: Function, dependencies: Array<any> = []) => {
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
