

export class ApiEndpoint {

    static BASE_ENDPOINT = process.env.REACT_APP_BASE_ENDPOINT;

    static productCategory  = {
        createNew : `${ApiEndpoint.BASE_ENDPOINT}/product/createNewCategory`,
        getAll : `${ApiEndpoint.BASE_ENDPOINT}/product/getAllCategories`,
        deleteById : `${ApiEndpoint.BASE_ENDPOINT}/product/deleteCategoryById`,
        update : `${ApiEndpoint.BASE_ENDPOINT}/product/updateCategory` ,
        updateActiveStatus : `${ApiEndpoint.BASE_ENDPOINT}/product/updateActiveStatus`
    }

    static productSubCategory  = {
        createNew : `${ApiEndpoint.BASE_ENDPOINT}/product/createNewSubCategory`,
        getAll : `${ApiEndpoint.BASE_ENDPOINT}/product/getAllSubCategory`,
        deleteById : `${ApiEndpoint.BASE_ENDPOINT}/product/deleteSubCategory`,
        update : `${ApiEndpoint.BASE_ENDPOINT}/product/updateSubCategory`,
        getByCategory : `${ApiEndpoint.BASE_ENDPOINT}/product/getSubCategoriesOfCategory`
    }

    static serviceCategory  = {
        createNew : `${ApiEndpoint.BASE_ENDPOINT}/service/createNewCategory`,
        getAll : `${ApiEndpoint.BASE_ENDPOINT}/service/getAllCategories`,
        deleteById : `${ApiEndpoint.BASE_ENDPOINT}/service/deleteCategoryById`,
        update : `${ApiEndpoint.BASE_ENDPOINT}/service/updateCategory` ,
        updateActiveStatus : `${ApiEndpoint.BASE_ENDPOINT}/service/updateActiveStatus`
    }

    static serviceSubCategory  = {
        createNew : `${ApiEndpoint.BASE_ENDPOINT}/service/createNewSubCategory`,
        getAll : `${ApiEndpoint.BASE_ENDPOINT}/service/getAllSubCategory`,
        deleteById : `${ApiEndpoint.BASE_ENDPOINT}/service/deleteSubCategory`,
        update : `${ApiEndpoint.BASE_ENDPOINT}/service/updateSubCategory`,
        getByCategory : `${ApiEndpoint.BASE_ENDPOINT}/service/getSubCategoriesOfCategory`
    }

    static vendor  = {
        createNew : `${ApiEndpoint.BASE_ENDPOINT}/vendor/createNew`,
        getAll : `${ApiEndpoint.BASE_ENDPOINT}/vendor/getAll`,
        getByProductCategory : `${ApiEndpoint.BASE_ENDPOINT}/vendor/getByProductCategory`,
        deleteById : `${ApiEndpoint.BASE_ENDPOINT}/vendor/deleteById`,
        update : `${ApiEndpoint.BASE_ENDPOINT}/vendor/update` ,
        updateActiveStatus : `${ApiEndpoint.BASE_ENDPOINT}/vendor/updateActiveStatus`
    }

    static product  = {
        createNew : `${ApiEndpoint.BASE_ENDPOINT}/product/createNew`,
        getAll : `${ApiEndpoint.BASE_ENDPOINT}/product/getAll`,
        getByCategory : `${ApiEndpoint.BASE_ENDPOINT}/product/getByCategory`,
        addToVendor : `${ApiEndpoint.BASE_ENDPOINT}/product/addToVendor`,
        removeFromVendor : `${ApiEndpoint.BASE_ENDPOINT}/product/removeFromVendor`,
        getByVendor : `${ApiEndpoint.BASE_ENDPOINT}/product/getByVendor`,
        deleteById : `${ApiEndpoint.BASE_ENDPOINT}/product/deleteById`,
        update : `${ApiEndpoint.BASE_ENDPOINT}/product/update`
    }

    static service  = {
        createNew : `${ApiEndpoint.BASE_ENDPOINT}/service/createNew`,
        getAll : `${ApiEndpoint.BASE_ENDPOINT}/service/getAll`,
        getBySubCategory : `${ApiEndpoint.BASE_ENDPOINT}/service/getBySubCategory`,
        getByVendor : `${ApiEndpoint.BASE_ENDPOINT}/service/getByVendor`,
        deleteById : `${ApiEndpoint.BASE_ENDPOINT}/service/deleteById`,
        update : `${ApiEndpoint.BASE_ENDPOINT}/service/update` ,

        updateServiceStatus : `${ApiEndpoint.BASE_ENDPOINT}/service/updateServiceActiveStatus` ,
        updateServicePackageStatus : `${ApiEndpoint.BASE_ENDPOINT}/service/updatePackageActiveStatus` ,

        createNewPackage: `${ApiEndpoint.BASE_ENDPOINT}/service/createNewPackage`,
        getAllPackage: `${ApiEndpoint.BASE_ENDPOINT}/service/getAllPackages`,
        getPackagesByService: `${ApiEndpoint.BASE_ENDPOINT}/service/getPackagesByService`,
        deletePackageById: `${ApiEndpoint.BASE_ENDPOINT}/service/deletePackageById`,

    }

    static user = {
        getWithFirebaseId : `${ApiEndpoint.BASE_ENDPOINT}/user/getWithFirebaseId` ,
        createNew : `${ApiEndpoint.BASE_ENDPOINT}/user/createNew` ,
        addDeliveryInformation : `${ApiEndpoint.BASE_ENDPOINT}/user/addDeliveryInformation`,
        getDeliveryInformation : `${ApiEndpoint.BASE_ENDPOINT}/user/getDeliveryInfoOfUser`,
        addContactInformation : `${ApiEndpoint.BASE_ENDPOINT}/user/addContactInformation`,
        getContactInformation : `${ApiEndpoint.BASE_ENDPOINT}/user/getContactInfoOfUser`,
        deleteContactInfo : `${ApiEndpoint.BASE_ENDPOINT}/user/deleteContactInfo`,
        deleteDeliveryInfo : `${ApiEndpoint.BASE_ENDPOINT}/user/deleteDeliveryInfo`,
    }

    static order  = {
        placeProductOrder : `${ApiEndpoint.BASE_ENDPOINT}/placeProductOrder`,
        placeServiceOrder : `${ApiEndpoint.BASE_ENDPOINT}/placeServiceOrder`,
        getAllProductOrders : `${ApiEndpoint.BASE_ENDPOINT}/getAllProductOrders`,
        getAllServiceOrders : `${ApiEndpoint.BASE_ENDPOINT}/getAllServiceOrders`,

        getProductOrdersOfUser : `${ApiEndpoint.BASE_ENDPOINT}/getProductOrdersOfUser`,
        getServiceOrdersOfUser : `${ApiEndpoint.BASE_ENDPOINT}/getServiceOrdersOfUser`,

        updateStatusOfOrder : `${ApiEndpoint.BASE_ENDPOINT}/updateStatusOfOrder`,

    }

}