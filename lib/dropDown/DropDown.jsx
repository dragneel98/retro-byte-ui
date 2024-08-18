import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './dropDown.module.css';

export const DropDown = ({ options, placeholder }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsHovered(false);
    };

    return (
        <div
            className={styles.dropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.dropdownHeader}>
                {selectedOption ? selectedOption.label : placeholder}
                <span className={`${styles.arrow} ${isHovered ? styles.open : ''}`}>▼</span>
            </div>
            {isHovered && (
                <div className={styles.dropdownList}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={styles.dropdownItem}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

DropDown.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    placeholder: PropTypes.string.isRequired,
};

