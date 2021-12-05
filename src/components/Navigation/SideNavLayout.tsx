import './sideNavigation.scss'
import React from 'react';

const SideNavLayout = (props : any) => {
    return (
        <div className="side-nav-layout">
            {props.children}
        </div>
    );
}

export default SideNavLayout;