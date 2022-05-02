
export default class DropdownItemModel {

    key =  ''
    text =  ''
    value = ''

    constructor(text , value){
        this.text = text;
        this.value = value;
        this.key = value;
    }
}
