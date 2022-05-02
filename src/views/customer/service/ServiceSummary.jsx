import React, {useCallback, useEffect, useState} from 'react'
import './service.scss';
import ServicePackageItem from "./ServicePackageItem";
import Fade from "react-reveal/Fade";


const ServiceSummary = (props) => {


    const [activePackages , setActivePackages] = useState([]);

    useEffect(() => {
        const temporaryPackageList = []
        for(const packageItem of props.serviceItem.packages){
            if(packageItem.isActive)temporaryPackageList.push(packageItem)
        }
        setActivePackages(temporaryPackageList);
    } , [props.serviceItem])


    return (
        <Fade>
            <div  className="container-service-summary">
                <div  style={{fontSize :"16px"  , padding:"10px 0px" , textAlign:"start"}}>
                    {props.serviceItem.name}
                </div>

                <div style={{display:"grid" , gridRowGap:"10px" , marginTop:"10px"}}>
                    {activePackages.map(packageItem => <ServicePackageItem key={packageItem.id} packageItem={packageItem} />)}
                </div>
            </div>
        </Fade>

    )
}

export default ServiceSummary;