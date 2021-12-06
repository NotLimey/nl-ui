import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const externalExpression = /http(s)?:\/\/[\w\d]*\.[\w\d]+/

export function linkIsExternal(link : string) {
    return link.match(externalExpression).length > 0;
}

type Props = React.PropsWithChildren<{
    to : string;
    content? : string;
}>

const Link = (props : Props) => linkIsExternal(props.to) ?
    <RouterLink
        children={props.children || props.content}
        to={props.to}
    />
    :
    <a
        href={props.to}
        rel="noreferrer"
        target="_blank"
        children={props.children || props.content}
    />

export default Link;