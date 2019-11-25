import React, { useEffect, RefObject, useRef, useState } from 'react';

interface IProps {
  valuesArray: string[];
}

// Accessibility keybord handling
const handleKeydown = (
  callback: Function,
  chosenValue: string,
  currentlyFocused: number,
  e: KeyboardEvent,
  firstLetters: string[],
  setCurrentFocus: (number: number) => void,
  setOpen: (boolean: boolean) => boolean,
  shiftIsPressed: boolean,
  valuesArray: string[],
  optionalValue?: Function
) => {
  if (e.key === 'Up' || e.key === 'ArrowUp') {
    e.preventDefault();
    return setCurrentFocus(currentlyFocused === 0 ? valuesArray.length - 1 : currentlyFocused - 1);
  } else if (e.key === 'Down' || e.key === 'ArrowDown') {
    e.preventDefault();
    return setCurrentFocus(currentlyFocused === valuesArray.length - 1 ? 0 : currentlyFocused + 1);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    optionalValue ? callback(chosenValue) : callback(chosenValue, optionalValue);
    return setOpen(false);
  } else if (firstLetters.includes(e.key)) {
    e.preventDefault();
    return setCurrentFocus(firstLetters.indexOf(e.key));
  } else if (e.key === 'Tab' && shiftIsPressed) {
    e.preventDefault();
    const focusableElements = [
      ...document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    ];
    const current = document.activeElement.parentNode.parentNode.querySelector('button');
    const currentCount = focusableElements.indexOf(current);
    return focusableElements[currentCount - 1].focus();
  }
};

const DropdownMenu: React.FC<IProps> = ({ valuesArray }: IProps) => {
  const [open, setOpen] = useState(false);
  const [currentlyFocused, setCurrentlyFocused]: [number, any] = useState(0);
  const [shiftIsPressed, setShiftIsPressed]: [boolean, any] = useState(false);

  // Refs for accessibility and focus handling
  const refs: RefObject<HTMLLIElement>[] = valuesArray.map(eventualElement => useRef(null));

  const firstLetters: string[] = valuesArray.map(value => value.charAt(0).toLowerCase());

  const toggleShift = ({ shiftKey }: KeyboardEvent) => setShiftIsPressed(shiftKey);

  useEffect(() => {
    window.addEventListener('keydown', toggleShift);
    window.addEventListener('keyup', toggleShift);

    return () => {
      window.removeEventListener('keydown', toggleShift);
      window.removeEventListener('keyup', toggleShift);
    };
  }, []);

  return (
    <ul>
      {valuesArray.map((value, i) => (
        <li key={i} ref={refs[i]}>
          {value}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
