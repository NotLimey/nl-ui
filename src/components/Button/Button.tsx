import React from "react";
import './button.scss'

export interface ButtonProps {
  label: string;
  theme: "light" | "dark"

}

const Button : React.FC<ButtonProps> = ({theme, label}) => (
  <button className={`nl-ui-button-${theme}`}>{label}</button>
);

export default Button;