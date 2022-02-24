import React, { useEffect } from "react";

let defaultTitle = "";

interface DefaultHelmetProps {
    title?: string;
    defaultValue?: boolean;
}

export const DefaultHelmet : React.FC<DefaultHelmetProps> = (props: DefaultHelmetProps) => {

    useEffect(() => {
    }, [])

    return (
        <div>

        </div>
    );
}

/*

    DefaultHelmet

*/