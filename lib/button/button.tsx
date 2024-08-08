import React from 'react';
import styles from "./button.module.css";
interface ButtonProps {
    children: string;
    type?: "primary" | "secondary" | "tertiary";
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }
// const getStyles = (...args: (string | undefined)[]): string => {
//   return ["button", ...args].filter(Boolean).join(" ");
// };
const getStyles = (...args: (string | undefined)[]): string => {
    return [styles.button, ...args.map(arg => arg ? styles[arg] : '')].filter(Boolean).join(" ");
  };

export const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
  return (
    <button className={getStyles(type)} onClick={onClick}>
      {children}
    </button>
  );
};
