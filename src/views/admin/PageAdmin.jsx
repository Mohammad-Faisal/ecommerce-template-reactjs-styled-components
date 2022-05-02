import React, {useState} from 'react'
import styled from "styled-components";
import TableProductCategories from "./tables/TableProductCategories";
import FormCreateVendor from "./forms/FormCreateVendor";
import TableVendors from "./tables/TableVendors";
import FormCreateProduct from "./forms/FormCreateProduct";
import TableProducts from "./tables/TableProducts";
import TableProductOrders from "./tables/TableProductOrders";
import TableServiceCategories from "./tables/TableServiceCategories";
import FormCreateProductSubCategory from "./forms/FormCreateProductSubCategory";
import FormCreateServiceSubCategory from "./forms/FormCreateServiceSubCategory";
import TableProductSubCategories from "./tables/TableProductSubCategories";
import TableServiceSubCategories from "./tables/TableServiceSubCategories";
import FormCreateProductCategory from "./forms/FormCreateProductCategory";
import FormCreateServiceCategory from "./forms/FormCreateServiceCategory";
import FormCreateService from "./forms/FormCreateService";
import FormCreateServicePackage from "./forms/FormCreateServicePackage";
import TableServices from "./tables/TableServices";
import TableServicePackages from "./tables/TableServicePackages";
import FormAddProductToVendor from "./forms/FormAddProductToVendor";
import TableVendorProducts from "./tables/TableVendorProducts";
import {useSelector} from "react-redux";
import SideNavBarAdmin from "../components/navigation/SideNavBarAdmin";
import {Routes} from "../../assets/constants/routes";
import TableServiceOrder from "./tables/TableServiceOrder";


export const PageAdmin = (props) => {


    return (
        <AdminPortalContainer>

            <SideNavBarAdmin />

            {window.location.pathname === Routes.ADMIN_PANEL &&
            <FormAndTableContainer>
                <FormCreateProductCategory/>
                <TableProductCategories/>
            </FormAndTableContainer>
            }


            {window.location.pathname === Routes.ADMIN_ADD_PRODUCT_CATEGORY &&
            <FormAndTableContainer>
                <FormCreateProductCategory/>
                <TableProductCategories/>
            </FormAndTableContainer>
            }


            {window.location.pathname === Routes.ADMIN_ADD_SERVICE_CATEGORY &&
            <FormAndTableContainer>
                <FormCreateServiceCategory/>
                <TableServiceCategories/>
            </FormAndTableContainer>
            }

            {window.location.pathname === Routes.ADMIN_ADD_PRODUCT_SUB_CATEGORY &&
            <FormAndTableContainer>
                <FormCreateProductSubCategory/>
                <TableProductSubCategories/>
            </FormAndTableContainer>
            }

            {window.location.pathname === Routes.ADMIN_ADD_SERVICE_SUB_CATEGORY &&
            <FormAndTableContainer>
                <FormCreateServiceSubCategory/>
                <TableServiceSubCategories/>
            </FormAndTableContainer>
            }



            {window.location.pathname === Routes.ADMIN_ADD_SERVICE &&
                <FormAndTableContainer>
                    <FormCreateService/>
                    <TableServices/>
                </FormAndTableContainer>
            }

            {window.location.pathname === Routes.ADMIN_ADD_SERVICE_PACKAGE &&
                <FormAndTableContainer>
                    <FormCreateServicePackage/>
                    <TableServicePackages/>
                </FormAndTableContainer>
            }


            {window.location.pathname === Routes.ADMIN_ADD_PRODUCT &&
            <FormAndTableContainer>
                <FormCreateProduct/>
                <TableProducts/>
            </FormAndTableContainer>
            }

            {window.location.pathname === Routes.ADMIN_ADD_VENDOR &&
                <FormAndTableContainer>
                    <FormCreateVendor/>
                    <TableVendors/>
                </FormAndTableContainer>
            }

            {window.location.pathname === Routes.ADMIN_ADD_PRODUCT_TO_VENDOR &&
                <FormAndTableContainer>
                    <FormAddProductToVendor/>
                    <TableVendorProducts/>
                </FormAndTableContainer>
            }

            {window.location.pathname === Routes.ADMIN_VIEW_PRODUCT_ORDERS &&
            <FormAndTableContainer>
                <TableProductOrders/>
            </FormAndTableContainer>
            }

            {window.location.pathname === Routes.ADMIN_VIEW_SERVICE_ORDERS &&
                <FormAndTableContainer>
                    <TableServiceOrder/>
                </FormAndTableContainer>
            }

        </AdminPortalContainer>

    )

}

const AdminPortalContainer = styled.div`
  text-align: start;
  display: grid;
  margin-top: 100px;
  
  
  @media (max-width: 600px) {
    margin-top: 80px;
    grid-template-rows: auto 1fr;
  }
  
  @media (min-width: 600px) {
    margin-top: 80px;
    grid-template-columns: auto 1fr;
  }
`;

const FormAndTableContainer = styled.div`
  text-align: center;
  display: grid;
  padding: 20px;
`;



