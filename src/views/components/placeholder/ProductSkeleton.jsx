import ContentLoader, { Facebook } from "react-content-loader";
import React, {useEffect, useState} from "react";
import windowSize from 'react-window-size';
import {isMobile} from "react-device-detect";

function ProductSkeleton  (props) {


    const [width , setWidth] = useState(500);
    const [height , setHeight] = useState(500);
    const [partialWidth , setPartialWidth] = useState(500);

    useEffect(() => {

        const calcWidth = isMobile? `${props.windowWidth/2.1}`: `${props.windowWidth/5.5}`;
        const calcHeight = isMobile? 200: 250;
        const calcPartialWidth= isMobile ? `${props.windowWidth/6}` :`${props.windowWidth/15}`

        setWidth(parseInt(calcWidth));
        setHeight(calcHeight);
        setPartialWidth(parseInt(calcPartialWidth));

    } , [props.windowWidth])
    
    return <ContentLoader width={width}  height={`${height+100}`}>
        <rect x="10" y="10" rx="5" ry="5" width={width}  height={`${height}`} />
        <rect x="10" y={`${height+20}`} rx="4" ry="4" width={width} height="25" />
        <rect x="10" y={`${height+50}`} rx="4" ry="4" width={partialWidth} height="30" />
        <rect x={`${width-partialWidth+10}`} y={`${height+50}`} rx="4" ry="4" width={partialWidth} height="30" />
    </ContentLoader>
}

export default windowSize(ProductSkeleton)
