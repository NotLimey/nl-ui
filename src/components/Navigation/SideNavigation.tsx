import './sideNavigation.scss'
import React from 'react';

const SideNavigation = (props : any) => {

    return (
        <div className="Side-navigation side-bar-in-layout">
            <ul className="side-navigation-items">
                {props.children}
            </ul>
        </div>
    );
}

export default SideNavigation;