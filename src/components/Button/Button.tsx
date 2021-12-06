import React from "react";
import './button.scss'

export interface ButtonProps {
  label: string;
  theme: "light" | "dark"
  onClick?: () => void;
  className?: string,
}

const Button : React.FC<ButtonProps> = (props : ButtonProps) => (
  <button onClick={props.onClick} className={`nl-ui-button-${props.theme} ${props.className}`}>{props.label}</button>
);

export default Button;