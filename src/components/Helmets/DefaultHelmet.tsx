import { Helmet } from "react-helmet";
import React from "react";


interface HelmetProps {
    Title?: string;
    SubTitle?: string;
    Description?: string;
    MetaImage?: string;
    ThemeColor?: string;
    FavIcon?: string;
    AppleFavIcon?: string;
    TitleDivider?: string;
    children?: React.ReactNode;
}

const WebsiteUrl = window.location.href;

const DefaultHelmet : React.FC<HelmetProps> = (props : HelmetProps) => (
    <React.Fragment>
    {/* Primary Meta Tags */}
        {props.Title !== undefined &&
            <Helmet>
                <title>{`${props.Title}${props.SubTitle ? `${props.TitleDivider || ` | `}${props.SubTitle}` : ''}`}</title>
                <meta name="title" content={`${props.Title}${props.SubTitle ? `${props.TitleDivider || ` | `}${props.SubTitle}` : ''}`} />
                <meta name="application-name" content={`${props.Title}${props.SubTitle ? `${props.TitleDivider || ` | `}${props.SubTitle}` : ''}`} />
                <meta name="apple-mobile-web-app-title" content={`${props.Title}${props.SubTitle ? `${props.TitleDivider || ` | `}${props.SubTitle}` : ''}`} />
            </Helmet>
        }
        {props.Description !== undefined &&
            <Helmet>
                <meta name="description" content={props.Description} />
                <meta property="og:description" content={props.Description} />
                <meta property="twitter:description" content={props.Description} />
            </Helmet>
        }
        {props.MetaImage !== undefined &&
            <Helmet>
                <meta property="og:image" content={props.MetaImage} />
                <meta property="twitter:image" content={props.MetaImage}></meta>
            </Helmet>
        }
        {props.FavIcon !== undefined &&
            <Helmet>
                <link rel="apple-touch-icon" sizes="180x180" href={props.AppleFavIcon || props.FavIcon}></link>
                <link rel="shortcut icon" href={props.FavIcon} />
                <link rel="icon" type="image/png" sizes="32x32" href={props.FavIcon} />
                <link rel="icon" type="image/png" sizes="16x16" href={props.FavIcon}></link>
            </Helmet>
        }
        
        <Helmet>
            <meta property="og:url" content={WebsiteUrl}  />
            <meta property="twitter:url" content={WebsiteUrl} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="og:type" content="website" />
	        <meta name="theme-color" content={props.ThemeColor || '#000000'}></meta>
            {props.children}
        </Helmet>
    </React.Fragment>
)

export default DefaultHelmet;