import { Helmet } from "react-helmet";
import React from "react";

// For information on how to use this go to https://github.com/NotLimey/SRT-Template/blob/main/README.md#default-helmet

const TitleHelmet = ({Title, SubTitle} : any) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{`${Title}${SubTitle ? ` | ${SubTitle}` : ''}`}</title>
            <meta name="title" content={`${Title}${SubTitle ? ` | ${SubTitle}` : ''}`} />
            <meta name="application-name" content={`${Title}${SubTitle ? ` | ${SubTitle}` : ''}`} />
            <meta property="og:title" content={`${Title}${SubTitle ? ` | ${SubTitle}` : ''}`} />
            <meta property="twitter:title" content={`${Title}${SubTitle ? ` | ${SubTitle}` : ''}`} />

            {/* Apple */}
            <meta name="apple-mobile-web-app-title" content={`${Title}${SubTitle ? ` | ${SubTitle}` : ''}`} />
        </Helmet>
    );
}

export default TitleHelmet;