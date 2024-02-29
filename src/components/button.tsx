import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  border-radius: 0.375rem; /* 6px */
  justify-content: center;
  padding: 0.75rem 1rem; /* 12px 16px */
  font-weight: 500;
  border: none;
  transition: all 0.3s;
  cursor: pointer;
  color: #fafafa;

  &:focus {
    outline: none;
  }
  ${({ variant, theme }) => {
    if (variant === "primary") {
      return css`
        background-color: ${theme.colors.primary};

        &:hover {
          background-color: ${theme.colors.primary_opacity};
        }
      `;
    }
  }}
`;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, ...props }, ref) => {
    return (
      <StyledButton type="submit" variant={variant} ref={ref} {...props} />
    );
  }
);

Button.displayName = "Button";
export default Button;
