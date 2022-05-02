import React, {useCallback, useState, useEffect} from 'react'
import CartPreview from '../customer/cart/CartPreview';
import CartDetails from '../customer/cart/CartDetails';
import SideNavBar from '../components/navigation/SideNavBarCustomer';
import '../customer/product/product.scss';
import {ItemType} from "../../assets/constants/GeneralConstants";
import {isBrowser} from "react-device-detect";
import banner from "../../assets/images/banner.png";
import InterMediateNavBar from "../components/navigation/IntermediateNavBar";
import {ProductContainer} from "../customer/product/ProductContainer";
import {VendorContainer} from "../customer/vendor/VendorContainer";
import {ServiceContainer} from "../customer/service/ServiceContainer";
import {ServiceSubCategoryContainer} from "../customer/service/ServiceSubCategoryContainer";
import {useParams, withRouter} from "react-router";
import {Input, Menu} from "semantic-ui-react";
import {PageFor, Routes} from "../../assets/constants/routes";


function PageExplore (props) {

    const [visible, setVisible] = useState(false)
    let { itemType } = useParams();

    return (
        <div >

            <img alt={"test"} className={"image-banner"} src={banner}/>

            <Menu pointing inverted color={"teal"} attached={"top"} size={"large"}>
                <Menu.Item
                    name='Products'
                    active={itemType === PageFor.PRODUCT_PAGE}
                    onClick={() => props.history.push(Routes.PRODUCT)}
                />
                <Menu.Item
                    name='Services'
                    active={itemType === PageFor.SERVICE_PAGE}
                    onClick={() => props.history.push(Routes.SERVICE)}
                />
            </Menu>

            {/*<InterMediateNavBar />*/}

            <div className="container-page-products">

                {/*{isBrowser &&  <SideNavBar/>}*/}

                <SideNavBar/>

                <div style={{display:"grid" , gridTemplateRows:"auto 1fr"}}>

                    {itemType === ItemType.PRODUCT && <VendorContainer /> }

                    {itemType === ItemType.PRODUCT && <ProductContainer />}

                    {itemType === ItemType.SERVICE && <ServiceSubCategoryContainer />}

                    {itemType === ItemType.SERVICE && <ServiceContainer /> }

                    <div onClick={() => setVisible(!visible)}><CartPreview /></div>
                    <CartDetails visible={visible} setVisible={setVisible}  />
                </div>
            </div>
        </div>
    )

}

export default withRouter(PageExplore);
