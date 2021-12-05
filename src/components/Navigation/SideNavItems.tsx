import { Link, useLocation } from "react-router-dom";
import './sideNavigation.scss'
import React, { useRef } from "react";

export const DefaultSidebarItem = (props : any) => {
    return (
        <li className="nl-ui__sbitem0">
        <Link to={props.path}>
            <span className="nl-ui__sbitem0-icon" dangerouslySetInnerHTML={{__html: props.svg}}>  
            </span>
            {props.label}
        </Link>
    </li>
    );
}

export const SidebarHeader = (props : any) => {
    return (
        <div className="nl-ui-sidebar-header">
            <span className="sidebar-header-icon" dangerouslySetInnerHTML={{__html: props.svg}}>
            </span>
            <h1>
                {props.title}
            </h1>
        </div>
    )
}

export const SidebarDivider = (props : any) => {
    return (
        <li>
            <hr className="nl-ui-fullwidth-divider" />
        </li>
    )
}

export const SidebarDropdown = (props : any) => {
    const location = useLocation(); 
    const getHeight = (el : any) => el.scrollHeight
    const dropdownBtn = useRef<any>(null);
    const dropdownMenu = useRef<any>(null);

    React.useEffect(() => {
        if(location.pathname.startsWith(props.path)) {
            dropdownBtn?.current?.classList.toggle('active');

            if(dropdownMenu.current === null) return;

            dropdownMenu.current.style.height = `${getHeight(dropdownMenu.current)}px`;
        }
    }, [props.path, location.pathname])

    const ToggleDropdown = (e : any) => {

        e?.target?.classList.toggle('active');

        if(dropdownMenu.current === null) return;

        if (dropdownMenu.current?.style?.height === "0px"|| dropdownMenu.current?.style?.height === "") {
            dropdownMenu.current.style.height = `${getHeight(dropdownMenu.current)}px`;
            return;
        } else {
            dropdownMenu.current.style.height = `0px`;
        }
    }

    return (
        <li className="nl-ui__sbitem1" id="Getting-Started">
            <button ref={dropdownBtn} onClick={e => ToggleDropdown(e)} className="nl-ui_dropdown-btn" id="nl-ui_dropdown-btn">
                <span className="nl-ui__sbitem1-icon" dangerouslySetInnerHTML={{__html: props.svg}}>  
                </span>
                {props.label}
                <span className="nl-ui__sbitem1-chevron-down-icon">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" aria-labelledby="chevronRightIconTitle" stroke="#f1f1f1" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#f1f1f1"> <title id="chevronRightIconTitle">Chevron Right</title> <polyline points="10 6 16 12 10 18 10 18"/> </svg>
                </span>
            </button>
            <div ref={dropdownMenu} className="side-navigation-item-dropdown">
                <ul>
                    {props.children}
                </ul>
            </div>
        </li>
    )
}

export const SBDropdownItem = (props : any) => {
    const location = useLocation(); 

    return (
        <li className="nl-ui__sbitem3">
            <Link className={props.path === location.pathname ? 'activeNavItem' : ''} to={props.path}>{props.title}</Link>
        </li>
    )
}