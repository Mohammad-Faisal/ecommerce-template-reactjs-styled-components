import SelectionItemModel from "../../models/SelectionItemModel";


export class TableType {
    static PRODUCT_CATEGORIES = "PRODUCT_CATEGORIES";
    static SERVICE_CATEGORIES = "SERVICE_CATEGORIES";
    static PRODUCT_SUB_CATEGORIES = "PRODUCT_SUB_CATEGORIES";
    static SERVICE_SUBCATEGORIES = "SERVICE_SUBCATEGORIES";
}


export const ItemType = {
    PRODUCT : "product" ,
    SERVICE : "service" ,
}

export const ItemStatusInCart = {
    IN_CART : "IN_CART" ,
    NOT_IN_CART : "NOT_IN_CART" ,
}


export class DropDownConstants {
    static TYPE_SERVICE_CATEGORY = "TYPE_SERVICE_CATEGORY";
    static TYPE_SERVICE_SUBCATEGORY = "TYPE_SERVICE_SUBCATEGORY";
    static TYPE_PRODUCT_CATEGORY = "TYPE_PRODUCT_CATEGORY";
    static TYPE_PRODUCT_SUBCATEGORY = "TYPE_PRODUCT_SUBCATEGORY";
    static TYPE_VENDOR = "TYPE_VENDOR";
    static TYPE_SERVICE = "TYPE_SERVICE";
    static TYPE_PRODUCT = "TYPE_PRODUCT";
}

export class CheckBoxConstants {
    static TYPE_PRODUCT_CATEGORY = "TYPE_PRODUCT_CATEGORY";
    static TYPE_PRODUCT_SUBCATEGORY = "TYPE_PRODUCT_SUBCATEGORY";
    static TYPE_SERVICE_CATEGORY = "TYPE_SERVICE_CATEGORY";
}

export class ModalTypeConstants {
    static TYPE_SUCCESS = "TYPE_SUCCESS";
    static TYPE_ORDER_CONFIRMATION = "TYPE_ORDER_CONFIRMATION";
    static TYPE_REGISTRATION = "TYPE_REGISTRATION";
    static TYPE_INFO = "TYPE_INFO";
    static TYPE_ERROR = "TYPE_ERROR";
    static TYPE_WARNING = "TYPE_WARNING";
}


export class ColorConstants {
    static BLUE = "#0079bf";
    static BLUE1 = "#55bcc9";
    static BLUE2 = "#00acc1";
    static SKY = "#97caef";

    static RED = "#dc143c";
    static RED1 = "#e53935";
    static RED2 = "#fe3935";

    static ORANGE = "#ff8c00";
    static ORANGE1 = "#fb8c00";

    static GREEN1 = "#14AB72";
    static GREEN2 = "#5cdb95";
    static GREEN3 = "#8ee4af";
    static GREEN4 = "#116466";
    static GREEN5 = "#45a29e";
    static GREEN6 = "#43a047";



    static PURPLE1= "#99738e";
    static PURPLE2= "#c38d9e";
    static PURPLE3= "#c38d9e";

    static WOOD1 = "#bc986a";
    static WOOD2 = "#daad86";

    static BLACK1 = "#0b0c10";
    static BLACK2 = "#1f2833";

    static GREY = "#8d9091";
    static GREY1 = "#9BB0A5";
    static GREY2 = "#e9efed";
}
export class ThreeColorConstants{
    static GREEN = "#5ABC91";
    static BLUE = "#6BA9FF";
    static RED = "#FF8868";
}

export class GreeneTheme{
    static COLOR1 ="#14ab72";
    static COLOR2 ="#009880";
    static COLOR3 ="#00938F";
    static COLOR4 ="#008697";
    static COLOR5 ="#007899";
    static COLOR6 ="#006995";
    static COLOR7="#F1FCF6";
    static COLOR8="#4D7D94";
    static COLOR9="#394B41";
}

export class TagColors {
    static GREEN_BACK  = "#F1FCF6"
    static GREEN_FRONT  = "#14ab72"

    static RED_BACK  = "rgba(253, 238, 233, 0.5)"
    static RED_FRONT  = "#e53935"

    static BLUE_BACK  = "#e1eff7"
    static BLUE_FRONT  = "#0079bf"
}

export class OrderStatusConstants {
    static PENDING = "Pending";
    static ACCEPTED = "Accepted";
    static SHIPPED = "Shipped";
    static DELIVERED = "Delivered";
}

export class RadioConstants {

    static TYPE_CATEGORY_FOR = "TYPE_CATEGORY_FOR";
    static TYPE_ORDER_STATUS = "TYPE_ORDER_STATUS";

    static radioOptionsCategoryType = [
        new SelectionItemModel("Product" , "PRODUCT") ,
        new SelectionItemModel("Service" , "SERVICE") ,
    ];

    static radioOptionsOrderStatus = [
        new SelectionItemModel("Pending" , OrderStatusConstants.PENDING) ,
        new SelectionItemModel("Accepted" , OrderStatusConstants.ACCEPTED) ,
        new SelectionItemModel("Shipped" , OrderStatusConstants.SHIPPED) ,
        new SelectionItemModel("Delivered" , OrderStatusConstants.DELIVERED) ,
    ];
}

export class OrderTypeConstants {
    static PRODUCT = "PRODUCT";
    static SERVICE = "SERVICE";
}
export class PaymentStatusConstants {
    static PAID = "PAID";
    static UNPAID = "UNPAID";
    static PARTIAL = "PARTIAL";
}