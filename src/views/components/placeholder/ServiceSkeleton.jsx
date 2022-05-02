import ContentLoader, { Facebook } from "react-content-loader";
import React from "react";
import windowSize from 'react-window-size';
import {isMobile} from "react-device-detect";

function ServiceSkeleton  (props) {

    const width = isMobile? `${props.windowWidth/1.05}`: `${props.windowWidth/2.5}`;
    const height = isMobile? 150: 250;
    const partialWidth= isMobile ? `${props.windowWidth/6}` :`${props.windowWidth/15}`
    
    return <ContentLoader width={width} height={height}>
        <rect x="10" y="10" rx="5" ry="5" width="50" height="50" />
        <rect x="70" y="25" rx="4" ry="4" width={`${width-60}`} height="20" />
        <rect x="10" y="70" rx="4" ry="4" width={`${width-10}`} height="100" />
    </ContentLoader>
}

export default windowSize(ServiceSkeleton)
