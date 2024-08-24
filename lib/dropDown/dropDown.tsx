import { useState } from 'react';
import styles from './dropDown.module.css';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  placeholder?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, placeholder = "Select an option" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={styles.dropdownToggle}>
        {selectedOption || placeholder}
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map(option => (
            <li 
              key={option} 
              onClick={() => handleSelect(option)} 
              className={styles.dropdownItem}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

