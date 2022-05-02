import React, {useEffect, useState} from 'react'
import {Dropdown, Icon, Input, Menu} from 'semantic-ui-react'
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {selectCheckBoxItems} from "../../../selectors/CheckBoxDataSelector";
import {CheckBoxConstants, ItemType} from "../../../assets/constants/GeneralConstants";
import {Routes} from "../../../assets/constants/routes";
import {withRouter} from "react-router-dom";
import {useParams} from "react-router";
import {AvatarImage, MenuIconImage} from "../Tags";
import {selectActiveProductCategoryList} from "../../../stores/product/ProductSelector";
import {selectActiveServiceCategoryList} from "../../../stores/service/ServiceSelector";
import {isMobile} from "react-device-detect";
import CategoryAction from "../../../stores/category/CategoryAction";


function SideNavBarCustomer (props){

    const dispatch = useDispatch();
    let { itemType } = useParams();

    const [activeMenuItem , setActiveMenuItem] = useState(1);

    let { categoryId } = useParams();

    const productCategory = useSelector(selectActiveProductCategoryList)
    const serviceCategory = useSelector(selectActiveServiceCategoryList)

    useEffect(() => {
        if(productCategory && productCategory.length>0 && itemType === ItemType.PRODUCT){
            props.history.push(`${Routes.PRODUCT}/${productCategory[0].id}/vendors`)
        }
    } , [productCategory , itemType])

    useEffect(() => {
        if( serviceCategory && serviceCategory.length>0 && itemType === ItemType.SERVICE){
            props.history.push(`${Routes.SERVICE}/${serviceCategory[0].id}/subCategories`)
        }
    } , [serviceCategory , itemType])

    useEffect(() => {
        dispatch(CategoryAction._requestGetProductCategories());
        dispatch(CategoryAction._requestGetServiceCategories());
    } , [])


    const handleProductCategoryClick = (e, { name }) => {
        props.history.push(`${Routes.PRODUCT}/${name}/vendors`)
    }

    const handleServiceCategoryClick = (e, { name }) => {
        props.history.push(`${Routes.SERVICE}/${name}/subCategories`)
    }


    if(itemType === ItemType.PRODUCT ) {
        return (
            <Menu attached={false} style= { isMobile ? {height:"250px" , overflow:"auto"} : {}}   fluid vertical compact color="teal" >
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


    if(itemType === ItemType.SERVICE ) {
        return (
            <Menu fluid vertical style= { isMobile ? {height:"250px" , overflow:"auto"} : {}} compact color="teal" >
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
}

export default withRouter(SideNavBarCustomer)


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

