import { Helmet } from "react-helmet";
import React from "react";


interface HelmetProps {
    title?: string;
    subTitle?: string;
    description?: string;
    metaImage?: string;
    themeColor?: string;
    favIcon?: string;
    appleFavIcon?: string;
    titleDivider?: string;
    children?: React.ReactNode;
}

const WebsiteUrl = window.location.href;

const DefaultHelmet: React.FC<HelmetProps> = (props: HelmetProps) => (
    <React.Fragment>
        {/* Primary Meta Tags */}
        {props.title &&
            <Helmet>
                <title>{`${props.title}${props.subTitle ? `${props.titleDivider || ` | `}${props.subTitle}` : ''}`}</title>
                <meta name="title" content={`${props.title}${props.subTitle ? `${props.titleDivider || ` | `}${props.subTitle}` : ''}`} />
                <meta name="application-name" content={`${props.title}${props.subTitle ? `${props.titleDivider || ` | `}${props.subTitle}` : ''}`} />
                <meta name="apple-mobile-web-app-title" content={`${props.title}${props.subTitle ? `${props.titleDivider || ` | `}${props.subTitle}` : ''}`} />
            </Helmet>
        }
        {props.description &&
            <Helmet>
                <meta name="description" content={props.description} />
                <meta property="og:description" content={props.description} />
                <meta property="twitter:description" content={props.description} />
            </Helmet>
        }
        {props.metaImage &&
            <Helmet>
                <meta property="og:image" content={props.metaImage} />
                <meta property="twitter:image" content={props.metaImage}></meta>
            </Helmet>
        }
        {props.favIcon &&
            <Helmet>
                <link rel="apple-touch-icon" sizes="180x180" href={props.appleFavIcon || props.favIcon}></link>
                <link rel="shortcut icon" href={props.favIcon} />
                <link rel="icon" type="image/png" sizes="32x32" href={props.favIcon} />
                <link rel="icon" type="image/png" sizes="16x16" href={props.favIcon}></link>
            </Helmet>
        }

        <Helmet>
            <meta property="og:url" content={WebsiteUrl} />
            <meta property="twitter:url" content={WebsiteUrl} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="og:type" content="website" />
            <meta name="theme-color" content={props.themeColor || '#000000'}></meta>
            {props.children}
        </Helmet>
    </React.Fragment>
)

export default DefaultHelmet;