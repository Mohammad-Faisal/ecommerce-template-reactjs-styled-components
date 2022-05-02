import React, {useEffect, useState} from 'react'
import {Dropdown, Icon, Input, Menu} from 'semantic-ui-react'
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {selectCheckBoxItems} from "../../../selectors/CheckBoxDataSelector";
import {CheckBoxConstants, ItemType} from "../../../assets/constants/GeneralConstants";
import CategoryAction from "../../../stores/category/CategoryAction";
import VendorAction from "../../../stores/vendor/VendorAction";
import GetVendorsOfCategoryRequest from "../../../stores/vendor/request/GetVendorsOfCategoryRequest";
import {isMobile} from "react-device-detect";
import {PageFor, Routes} from "../../../assets/constants/routes";
import SubCategoryAction from "../../../stores/subcategory/SubCategoryAction";
import GetSubCategoriesOfCategoryRequest from "../../../stores/subcategory/request/GetSubCategoriesOfCategoryRequest";
import {withRouter} from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import {useParams} from "react-router";
import {MenuIconImage} from "../Tags";
import {selectActiveProductCategoryList} from "../../../stores/product/ProductSelector";
import {selectActiveServiceCategoryList} from "../../../stores/service/ServiceSelector";

function InterMediateNavBar (props){

    const dispatch = useDispatch();
    let { itemType } = useParams();
    let { categoryId } = useParams();

    const [isProductMenuOpen , setProductMenuOpen] = useState(false);
    const [isServiceMenuOpen , setServiceMenuOpen] = useState(false);

    const [activeMenuItem , setActiveMenuItem] = useState(1);

    const productCategory = useSelector(selectActiveProductCategoryList)
    const serviceCategory = useSelector(selectActiveServiceCategoryList)

    const handleProductCategoryClick = (e, { name }) => {
        setProductMenuOpen(false)
        props.history.push(`${Routes.PRODUCT}/${name}/vendors`)
    }

    const handleServiceCategoryClick = (e, { name }) => {
        setServiceMenuOpen(false)
        props.history.push(`${Routes.SERVICE}/${name}/subCategories`)
    }


    useEffect(() => {
        dispatch(CategoryAction._requestGetProductCategories());
        dispatch(CategoryAction._requestGetServiceCategories());
    } , [])



    if(itemType === ItemType.PRODUCT && isMobile) {
        return (
            <Menu style={{height:"250px" , overflow:"auto"}} attached={false} fluid vertical compact color="teal" >
                {productCategory.map(item =>  <Menu.Item
                    name={item.id}
                    active={parseInt(categoryId) === item.id}
                    onClick={ handleProductCategoryClick }
                >
                    <MenuContainer>
                        <MenuIconImage src={item.logo} />
                        <MenuItemText>{item.name}</MenuItemText>
                    </MenuContainer>
                </Menu.Item>)}
            </Menu>
        )
    }


    if(itemType === ItemType.SERVICE && isMobile) {
        return (
            <Menu style={{height:"250px" , overflow:"auto"}} fluid vertical compact color="teal" >
                {serviceCategory.map(item =>  <Menu.Item
                    name={item.id}
                    active={parseInt(categoryId) === item.id}
                    onClick={handleServiceCategoryClick}
                >
                    <MenuContainer>
                        <MenuIconImage src={item.logo} />
                        <MenuItemText>{item.name}</MenuItemText>
                    </MenuContainer>
                </Menu.Item>)}
            </Menu>
        )
    }


    return <div></div>


    if(isMobile){
        return (

            <Menu color={"teal"} compact attached={"top"} fluid >

                <Dropdown  open={isProductMenuOpen}  item text={"Products  "}  simple>
                    <Dropdown.Menu style={{height:"300px" , overflow:"auto"}} >
                        {productCategory.map(item =>
                            <Dropdown.Item onClick={handleProductCategoryClick} key={item.id} name={item.id} active={parseInt(categoryId) === item.id} >
                                <MenuContainer>
                                    <MenuIconImage src={item.logo} />
                                    <MenuItemText>{item.name}</MenuItemText>
                                </MenuContainer>
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown  open={isServiceMenuOpen} item text={"Services  "}  simple>
                    <Dropdown.Menu style={{height:"300px" , overflow:"auto"}} >
                        {serviceCategory.map(item =>
                            <Dropdown.Item  onClick={handleServiceCategoryClick} key={item.id} name={item.id} active={parseInt(categoryId) === item.id}>
                                <MenuContainer>
                                    <MenuIconImage src={item.logo} />
                                    <MenuItemText>{item.name}</MenuItemText>
                                </MenuContainer>
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                {/*<Menu.Menu position='right' >*/}
                {/*    <Menu.Item>*/}
                {/*        <Input size={"mini"} icon='search' placeholder='Search' />*/}
                {/*    </Menu.Item>*/}
                {/*</Menu.Menu>*/}

            </Menu>
        )
    }else{
        return (
            <Menu inverted color={"teal"} attached={"top"} size={"large"}>
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
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search'/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default withRouter(InterMediateNavBar)



const MenuContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items:center;
    padding: 5px 5px;
    grid-column-gap:20px;
    text-align:start;
`;

const MenuItemText = styled.div`
    font-size:16px;
    font-weight:bold;
`;

