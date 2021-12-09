import React from "react";
import CSS from 'csstype';
import { CombineClasses } from '../';
import './layouts.scss'

interface ContainerProps {
    style?: CSS.Properties;
    className?: string;
    children?: React.ReactNode;

}

const Container : React.FC<ContainerProps> = (props : ContainerProps) => {
    return (
        <div className='nl-ui-container'>
            <div style={props.style} className={CombineClasses('nl-ui-container-centered', props.className)}>
                {props.children}
            </div>
        </div>
    );
}

export default Container;