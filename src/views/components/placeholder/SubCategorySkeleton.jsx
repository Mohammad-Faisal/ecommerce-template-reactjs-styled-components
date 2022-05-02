import ContentLoader, { Facebook } from "react-content-loader";
import React from "react";
import windowSize from 'react-window-size';
import {isMobile} from "react-device-detect";

function SubCategorySkeleton  (props) {

    const width = isMobile? `${props.windowWidth/1.05}`: `${props.windowWidth/2.5}`;
    const height = isMobile? 150: 250;
    const partialWidth= isMobile ? `${props.windowWidth/6}` :`${props.windowWidth/15}`

    return <ContentLoader width={width} height={height}>
        <rect x="10" y="20" rx="50" ry="50" width="50" height="50" />
        <rect x="90" y="30" rx="4" ry="4" width="150" height="20" />
        {/*<rect x="90" y="60" rx="4" ry="4" width="200" height="20" />*/}
    </ContentLoader>
}

export default windowSize(SubCategorySkeleton)
