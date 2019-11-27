import React, { useEffect, RefObject, useRef, useState } from 'react';

interface IProps {
  valuesArray: string[];
}

// Accessibility keybord handling

const getFirstLetters: Function = (stringArray: string[], optionalValue: any): string[] =>
  stringArray.map((value: string) => value.charAt(0).toLowerCase());

const DropdownMenu: React.FC<IProps> = ({ valuesArray }: IProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [currentlyFocused, setCurrentlyFocused]: [number, any] = useState(0);
  const [shiftIsPressed, setShiftIsPressed]: [boolean, any] = useState(false);

  // Refs for accessibility and focus handling
  const refs: RefObject<HTMLLIElement>[] = valuesArray.map(eventualElement => useRef(null));

  const firstLetters: string[] = getFirstLetters(valuesArray);

  const toggleShift = ({ shiftKey }: KeyboardEvent) => setShiftIsPressed(shiftKey);

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Up' || e.key === 'ArrowUp') {
      e.preventDefault();
      return setCurrentlyFocused(currentlyFocused === 0 ? valuesArray.length - 1 : currentlyFocused - 1);
    } else if (e.key === 'Down' || e.key === 'ArrowDown') {
      e.preventDefault();
      return setCurrentlyFocused(currentlyFocused === valuesArray.length - 1 ? 0 : currentlyFocused + 1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      optionalValue ? callback(chosenValue) : callback(chosenValue, optionalValue);
      return setOpen(false);
    } else if (firstLetters.includes(e.key)) {
      e.preventDefault();
      return setCurrentlyFocused(firstLetters.indexOf(e.key));
    } else if (e.key === 'Tab' && shiftIsPressed) {
      e.preventDefault();
      const focusableElements: HTMLElement[] = Array.from(
        document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      );
      const current: HTMLButtonElement = document.activeElement.parentNode.parentNode.querySelector('button');
      const currentCount: number = focusableElements.indexOf(current);
      return focusableElements[currentCount - 1].focus();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', toggleShift);
    window.addEventListener('keyup', toggleShift);

    return () => {
      window.removeEventListener('keydown', toggleShift);
      window.removeEventListener('keyup', toggleShift);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setOpen(true)} onFocus={() => setOpen(true)} onTouchEnd={() => setOpen(true)}>
        hello
      </button>
      <ul>
        {valuesArray.map((value, i) => (
          <li key={i} ref={refs[i]}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
