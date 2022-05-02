import React, {useEffect, useState} from 'react'
import {Dropdown, Icon, Menu} from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux";
import {Routes} from "../../../assets/constants/routes";
import {withRouter} from "react-router-dom";
import {isMobile} from "react-device-detect";

function  SideNavBarAdmin(props){

    const dispatch = useDispatch();
    const [active , setActive] = useState(window.location.pathname)

    const handleItemClick = (e, {name}) =>{
        setActive(name);
        props.history.push(name);
    }

    if(isMobile ){
        return (
            <Menu  color={"teal"}  attached={"top"}>

                <Dropdown item text='Product'>
                    <Dropdown.Menu>
                        <Dropdown.Item icon='edit' text='Add New Category' name={Routes.ADMIN_ADD_PRODUCT_CATEGORY}  onClick={handleItemClick}/>
                        <Dropdown.Item icon='edit' text='Add New Sub Category' name={Routes.ADMIN_ADD_PRODUCT_SUB_CATEGORY}  onClick={handleItemClick}/>
                        <Dropdown.Item icon='plus' text='Add New Product' name={Routes.ADMIN_ADD_PRODUCT}  onClick={handleItemClick}/>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown item text='Service'>
                    <Dropdown.Menu>
                        <Dropdown.Item icon='edit' text='Add New Category' name={Routes.ADMIN_ADD_SERVICE_CATEGORY}  onClick={handleItemClick}/>
                        <Dropdown.Item icon='edit' text='Add New Sub Category' name={Routes.ADMIN_ADD_SERVICE_SUB_CATEGORY}  onClick={handleItemClick}/>
                        <Dropdown.Item icon='plus' text='Add New Service' name={Routes.ADMIN_ADD_SERVICE}  onClick={handleItemClick}/>
                        <Dropdown.Item icon='edit' text='Add Service Package' name={Routes.ADMIN_ADD_SERVICE_PACKAGE}  onClick={handleItemClick}/>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown item text='Vendor'>
                    <Dropdown.Menu>
                        <Dropdown.Item icon='edit' text='Add New Vendor' name={Routes.ADMIN_ADD_VENDOR}  onClick={handleItemClick}/>
                        <Dropdown.Item icon='edit' text='Add Product to Vendor' name={Routes.ADMIN_ADD_PRODUCT_TO_VENDOR}  onClick={handleItemClick}/>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown item text='Order'>
                    <Dropdown.Menu>
                        <Dropdown.Item icon='edit' text='View Product Orders' name={Routes.ADMIN_VIEW_PRODUCT_ORDERS}  onClick={handleItemClick}/>
                        <Dropdown.Item icon='edit' text='View Service Orders' name={Routes.ADMIN_VIEW_SERVICE_ORDERS}  onClick={handleItemClick}/>
                    </Dropdown.Menu>
                </Dropdown>

            </Menu>
        )
    }else{
        return (
            <Menu  vertical>
                <Menu.Item>
                    Product <Icon name='product hunt' />
                    <Menu.Menu>
                        <Menu.Item name={Routes.ADMIN_ADD_PRODUCT_CATEGORY} active={active===Routes.ADMIN_ADD_PRODUCT_CATEGORY} onClick={handleItemClick}> Add Category </Menu.Item>
                        <Menu.Item name={Routes.ADMIN_ADD_PRODUCT_SUB_CATEGORY} active={active===Routes.ADMIN_ADD_PRODUCT_SUB_CATEGORY} onClick={handleItemClick}> Add Sub Category </Menu.Item>
                        <Menu.Item name={Routes.ADMIN_ADD_PRODUCT} active={active===Routes.ADMIN_ADD_PRODUCT} onClick={handleItemClick}> Add Product </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    Service <Icon name='servicestack' />
                    <Menu.Menu>
                        <Menu.Item name={Routes.ADMIN_ADD_SERVICE_CATEGORY} active={active===Routes.ADMIN_ADD_SERVICE_CATEGORY} onClick={handleItemClick}> Add Category </Menu.Item>
                        <Menu.Item name={Routes.ADMIN_ADD_SERVICE_SUB_CATEGORY} active={active===Routes.ADMIN_ADD_SERVICE_SUB_CATEGORY} onClick={handleItemClick}> Add Sub Category </Menu.Item>
                        <Menu.Item name={Routes.ADMIN_ADD_SERVICE} active={active===Routes.ADMIN_ADD_SERVICE} onClick={handleItemClick}> Add Service </Menu.Item>
                        <Menu.Item name={Routes.ADMIN_ADD_SERVICE_PACKAGE} active={active===Routes.ADMIN_ADD_SERVICE_PACKAGE} onClick={handleItemClick}> Add Package </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    Vendor <Icon name='venus double' />
                    <Menu.Menu>
                        <Menu.Item name={Routes.ADMIN_ADD_VENDOR} active={active===Routes.ADMIN_ADD_VENDOR} onClick={handleItemClick}> Add Vendor </Menu.Item>
                        <Menu.Item name={Routes.ADMIN_ADD_PRODUCT_TO_VENDOR} active={active===Routes.ADMIN_ADD_PRODUCT_TO_VENDOR} onClick={handleItemClick}> Add Product to Vendor </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    Orders <Icon name='first order' />
                    <Menu.Menu>
                        <Menu.Item name={Routes.ADMIN_VIEW_PRODUCT_ORDERS} active={active===Routes.ADMIN_VIEW_PRODUCT_ORDERS} onClick={handleItemClick}> See Product Orders </Menu.Item>
                        <Menu.Item name={Routes.ADMIN_VIEW_SERVICE_ORDERS} active={active===Routes.ADMIN_VIEW_SERVICE_ORDERS} onClick={handleItemClick}> See Service Orders </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>


            </Menu>
        )
    }

}

export default withRouter(SideNavBarAdmin)

