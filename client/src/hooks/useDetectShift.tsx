import { useState, useEffect } from 'react';

const useDetectShift: Function = () => {
  const [shiftIsPressed, setShiftIsPressed]: [boolean, any] = useState(false);

  const toggleShift: EventListenerOrEventListenerObject = ({ shiftKey }: KeyboardEvent) => setShiftIsPressed(shiftKey);
  useEffect(() => {
    window.addEventListener('keydown', toggleShift);
    window.addEventListener('keyup', toggleShift);

    return () => {
      window.removeEventListener('keydown', toggleShift);
      window.removeEventListener('keyup', toggleShift);
    };
  });

  return shiftIsPressed;
};

export default useDetectShift;
