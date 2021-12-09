import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { CombineClasses } from '.';

const externalExpression = /http(s)?:\/\/[\w\d]*\.[\w\d]+/g;

export function linkIsExternal(link : string) {
    const match = link.match(externalExpression);

    return (match?.length && match.length > 0) || false
}

type Props = React.PropsWithChildren<{
    to : string;
    content? : string;
    className? : string;
}>

const Link = (props : Props) => linkIsExternal(props.to) ? <a
        className={CombineClasses("external-link", props.className || '')}
        href={props.to}
        rel="noreferrer"
        target="_blank"
        children={props.children || props.content}
    />
    : 
    <RouterLink
        className={CombineClasses("link", props.className || '')}
        children={props.children || props.content}
        to={props.to}
    />

export default Link;