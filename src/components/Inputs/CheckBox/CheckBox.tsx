import React from "react";
import './checkbox.scss'
import { CombineClasses } from '../../index';

interface CheckBoxComponentProps {
    onChange?: () => void;
    defaultChecked?: boolean;
    label?: string;
    size?: string;
    className?: string;
    theme?: 'default' | 'dark';
    spaceBetween?: boolean
}

const CheckBoxComponent : React.FC<CheckBoxComponentProps> = (props : CheckBoxComponentProps) => (
    <label 
        className={CombineClasses("nl-ui-checkbox", (props.className || '') + `${props.theme ? `checkbox-theme-${props.theme}` : 'checkbox-theme-default'}`)} 
        style={{fontSize: (props.size || '17px'), justifyContent: (props.spaceBetween ? 'space-between' : 'flex-start')}}>
        {props.label}
        <input 
            type="checkbox" 
            defaultChecked={props.defaultChecked || false}
            onChange={props.onChange}
        />
        <div className="checkmark"></div>
    </label>
)

export default CheckBoxComponent;