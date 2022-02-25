import React from "react";
import { Helmet } from "react-helmet";

var defaultSettings : any = {}

interface DefaultHelmetProps {
    title?: string;
    subTitle?: string;
    titleDivider?: string;
}

export const DefaultHelmet = (props : DefaultHelmetProps) => {

    const _defaultSettings = defaultSettings;

    if(props) {
        const keys = Object.keys(props);
        for(var i = 0; i < keys.length; i++) {
            if(props[keys[i]])
                defaultSettings[keys[i]] = props[keys[i]]
        }
    }

    const getTitle = () => {
        let text = "";

        if(props.title) {
            text = text + props.title;
        }else {
            if(_defaultSettings.title) {
                text = text + _defaultSettings.title;
            }
        }

        
        if(props.subTitle || _defaultSettings.subTitle) {
            let subTtl = props.subTitle ?? _defaultSettings.subTitle;

            if(props.titleDivider || _defaultSettings.titleDivider) {
                text = text + ` ${props.titleDivider ?? _defaultSettings.titleDivider} ` + subTtl
            }else {
                text = text + " | " + subTtl
            }
        }

        return text
    }

    return (
        <React.Fragment>
            {(props.title || _defaultSettings.title) &&
                <Helmet>
                    <title>
                        {getTitle()}
                    </title>
                    <meta name="og:title" content="The Rock"/>
                </Helmet>
            }
        </React.Fragment>
    )
}