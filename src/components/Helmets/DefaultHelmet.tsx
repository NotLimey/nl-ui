import React from "react";
import { Helmet } from "react-helmet";

var defaultSettings : any = {}

interface DefaultHelmetProps {
    title?: string;
    subTitle?: string;
    titleDivider?: string;
    keywords?: string;
    description?: string;
    subject?: string;
    copyright?: string;
    language?: string;
    robots?: string;
    revised?: string;
    topic?: string;
    summary?: string;
    Classification?: string;
    author?: string;
    replyTo?: string;
    owner?: string;
    url?: string;
    identifierURL?: string;
    image?: string;
    favIcon?: string;
    children?: React.ReactNode;
}

export const DefaultHelmet = (props : DefaultHelmetProps) => {

    const _defaultSettings = defaultSettings;

    if(props) {
        const keys = Object.keys(props);
        for(var i = 0; i < keys.length; i++) {
            if(props[keys[i]] && keys[i] !== "children")
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
                    <meta name="og:title" content={getTitle()} />
                </Helmet>
            }
            {(props.description || _defaultSettings.description) &&
                <Helmet>
                    <meta name="description" content={props.description ?? _defaultSettings.description}/>
                    <meta name="og:description" content={props.description ?? _defaultSettings.description} />
                </Helmet>
            }
            <Helmet>
                {(props.keywords || _defaultSettings.keywords) && <meta name="keywords" content={props.keywords ?? _defaultSettings.keywords} />}
                {(props.subject || _defaultSettings.subject) && <meta name="subject" content={props.subject ?? _defaultSettings.subject} />}
                {(props.copyright || _defaultSettings.copyright) && <meta name="copyright" content={props.copyright ?? _defaultSettings.copyright} />}
                {(props.language || _defaultSettings.language) && <meta name="language" content={props.language ?? _defaultSettings.language} />}
                {(props.robots || _defaultSettings.robots) && <meta name="robots" content={props.robots ?? _defaultSettings.robots} />}
                {(props.revised || _defaultSettings.revised) && <meta name="revised" content={props.revised ?? _defaultSettings.revised} />}
                {(props.topic || _defaultSettings.topic) && <meta name="topic" content={props.topic ?? _defaultSettings.topic} />}
                {(props.summary || _defaultSettings.summary) && <meta name="summary" content={props.summary ?? _defaultSettings.summary} />}
                {(props.Classification || _defaultSettings.Classification) && <meta name="Classification" content={props.Classification ?? _defaultSettings.Classification} />}
                {(props.author || _defaultSettings.author) && <meta name="author" content={props.author ?? _defaultSettings.author} />}
                {(props.replyTo || _defaultSettings.replyTo) && <meta name="replyTo" content={props.replyTo ?? _defaultSettings.replyTo} />}
                {(props.owner || _defaultSettings.owner) && <meta name="owner" content={props.owner ?? _defaultSettings.owner} />}
                {(props.url || _defaultSettings.url) ? <meta name="url" content={props.url ?? _defaultSettings.owurlner} /> : <meta name="url" content={window.location.origin + window.location.pathname} />}
                {(props.identifierURL || _defaultSettings.identifierURL) && <meta name="identifierURL" content={props.identifierURL ?? _defaultSettings.identifierURL} />}
                {(props.image || _defaultSettings.image) && <meta property="og:image" content={props.image ?? _defaultSettings.image} />}
                {(props.favIcon || _defaultSettings.favIcon) && <link rel="icon" type="image/x-icon" href={props.favIcon ?? _defaultSettings.favIcon} />}
                {props.children}
            </Helmet>
        </React.Fragment>
    )
}