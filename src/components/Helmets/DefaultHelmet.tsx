import { Helmet } from "react-helmet";
import React from "react";

// For information on how to use this go to https://github.com/NotLimey/SRT-Template/blob/main/README.md#default-helmet
/*
const DefaultTitle = "RTS Template";
const ThemeColor = "#000000";
const DefaultDescription = 
    `This is a react application made with React-Typescript structured template (https://github.com/NotLimey/React-Typescript-Structured-Template)`

const DefaultHelmet = ({Title, Description, SubTitle, MetaImage, FavIcon} : any) => {
    return (
        <Helmet>
            {/* Primary Meta Tags /*
            <title>{Title ? Title : `${DefaultTitle}${SubTitle ? ` | ${SubTitle}` : ""}`}</title>
            <meta name="title" content={Title ? Title : `${DefaultTitle}${SubTitle ? ` | ${SubTitle}` : ""}`} />
            <meta name="application-name" content={SubTitle ? `${Title ? Title : DefaultTitle} | ${SubTitle}` : `${Title}`} />

            <meta name="description" content={Description ? Description : DefaultDescription} />

            {/* Open Graph / Facebook /*
            <meta property="og:type" content="website" />
            <meta property="og:url" content={WebsiteUrl}  />
            <meta property="og:title" content={Title ? Title : `${DefaultTitle}${SubTitle ? ` | ${SubTitle}` : ""}`} />
            <meta property="og:description" content={Description ? Description : DefaultDescription} />
            
            {MetaImage && <meta property="og:image" content={MetaImage} />}

            {/* Twitter /*
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={WebsiteUrl} />
            <meta property="twitter:title" content={Title ? Title : `${DefaultTitle}${SubTitle ? ` | ${SubTitle}` : ""}`} />
            <meta property="twitter:description" content={Description ? Description : DefaultDescription} />
            
            {MetaImage && <meta property="twitter:image" content={MetaImage}></meta>}

            {/* Apple /*
            <meta name="apple-mobile-web-app-title" content={Title ? Title : `${DefaultTitle}${SubTitle ? ` | ${SubTitle}` : ""}`} />
	
            <link rel="apple-touch-icon" sizes="180x180" href={FavIcon} ></link>

            {/* FavIcons/*
            <link rel="shortcut icon" href={FavIcon} />
            <link rel="icon" type="image/png" sizes="32x32" href={FavIcon} />
            <link rel="icon" type="image/png" sizes="16x16" href={FavIcon}></link>

            {/* Theme Color /*
	        <meta name="theme-color" content={ThemeColor}></meta>
        </Helmet>
    );
}*/

interface HelmetProps {
    Title?: string;
    SubTitle?: string;
    MetaImage?: string;
    ThemeColor?: string;
    FavIcon?: string;
    TitleDivider?: string;
}

const WebsiteUrl = window.location.href;

const DefaultHelmet : React.FC<HelmetProps> = (props : HelmetProps) => (
    <Helmet>
            {/* Primary Meta Tags */}
            {props.Title !== undefined &&
                <>
                    <title>{props.Title + (props.SubTitle && (props.TitleDivider || ' | ') + props.SubTitle) || ''}</title>
                    <meta name="title" content={props.Title + ((props.SubTitle && (props.TitleDivider || ' | ') + props.SubTitle)) || ''} />
                    <meta name="application-name" content={props.Title + ((props.SubTitle && (props.TitleDivider || ' | ') + props.SubTitle)) || ''} />
                </>
            }
    </Helmet>
)

export default DefaultHelmet;