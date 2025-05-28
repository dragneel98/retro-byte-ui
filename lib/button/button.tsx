import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
}

const styles = {
  button: {
    paddingLeft: '18px',
    paddingRight: '18px',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'ndot',
  },
  primary: {
    backgroundColor: '#C8102E',
    color: '#ffffff',
  },
  secondary: {
    backgroundColor: '#ccc',
    color: '#000000',
  },
  tertiary: {
    backgroundColor: 'transparent',
    color: '#C8102E',
  },
  text: {
    fontSize: '16px',
    fontWeight: 'bold',
  }
};

export const Button: React.FC<ButtonProps> = ({ children, type = "primary", onClick }) => {
  const buttonStyle = {
    ...styles.button,
    ...(type === "primary" ? styles.primary : {}),
    ...(type === "secondary" ? styles.secondary : {}),
    ...(type === "tertiary" ? styles.tertiary : {})
  };

  return (
    <button 
      style={buttonStyle} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};