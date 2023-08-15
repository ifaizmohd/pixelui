import React, { ReactNode } from 'react';
import styled from 'styled-components';
import lightTheme from '@pixelui/themes/src/index';

interface StyledButtonProps {
  hasIcon?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${lightTheme.colors.primary};
  color: ${lightTheme.colors.text};
  font-family: ${lightTheme.typography.fontFamily};
  font-size: ${lightTheme.typography.fontSize};
  padding: ${({ hasIcon }) => (hasIcon ? '8px 16px' : '10px 20px')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;

  /* Adjust styles when the button has an icon */
  svg {
    margin-right: 8px;
  }
`;

interface ButtonProps {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, icon, onClick, className }) => {
  return (
    <StyledButton onClick={onClick} hasIcon={!!icon} className={className}>
      {icon && icon}
      {label}
    </StyledButton>
  );
};

export default Button;
