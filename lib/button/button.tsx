import { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';

interface ButtonProps {
  children: ReactNode;
  type?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#C8102E',
  },
  secondary: {
    backgroundColor: '#ccc',
  },
  tertiary: {
    backgroundColor: 'transparent',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    ...Platform.select({
      web: {
        fontFamily: 'ndot',
      },
      default: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
      }
    })
  },
  secondaryText: {
    color: '#000000',
  },
  tertiaryText: {
    color: '#C8102E',
  }
});

export const Button: React.FC<ButtonProps> = ({ children, type = "primary", onClick }) => {
  const buttonStyle = [
    styles.button,
    type === "primary" && styles.primary,
    type === "secondary" && styles.secondary,
    type === "tertiary" && styles.tertiary,
  ];

  const textStyle = [
    styles.text,
    type === "secondary" && styles.secondaryText,
    type === "tertiary" && styles.tertiaryText,
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onClick}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};