import React, { createContext } from "react";

interface HelmetContextInterface {
    title?: string;
    children?: React.ReactNode;
    //test: string;
}

const HelmetContext = createContext<HelmetContextInterface | null>(null);

const HelmetProvider : React.FC<HelmetContextInterface> = (props : HelmetContextInterface) => {
    return (
        <HelmetContext.Provider value={props}>
            {props.children}
        </HelmetContext.Provider>
    );
}

export {HelmetProvider, HelmetContext};