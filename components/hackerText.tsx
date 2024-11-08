import React from 'react';

type HackerTextProps = {
  children: string;
  className?: string;
};

const HackerText: React.FC<HackerTextProps> = ({ children, className }) => {
  const hackerEffect = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let iterations = 0;

    const interval = setInterval(() => {
      const element = e.target as HTMLSpanElement;
      const originalText = element.getAttribute('data-value') || '';
      const newText = originalText
        .split('')
        .map((letter: string, index: number) => {
          if (index < iterations) {
            return originalText[index];
          }

          return letter === ' '
            ? letter
            : characters[Math.floor(Math.random() * characters.length)];
        })
        .join('');

      element.innerText = newText;

      if (iterations >= newText.length) {
        clearInterval(interval);
      }
      iterations += 1;
    }, 30);
  };

  return (
    <span
      onMouseOver={hackerEffect}
      data-value={children}
      className={className}
    >
      {children}
    </span>
  );
};

export default HackerText;
