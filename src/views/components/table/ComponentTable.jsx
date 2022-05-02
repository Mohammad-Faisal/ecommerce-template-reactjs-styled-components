import React, {Component} from 'react';
import {Button, Dimmer, Form, Icon, Image, Label, Loader, Menu, Message, Segment, Table} from 'semantic-ui-react'
import {ComponentInput, ComponentInputTextArea} from "../input/ComponentInput";
import ComponentDropdown from "../input/ComponentDropdown";
import {CheckBoxConstants, DropDownConstants} from "../../../assets/constants/GeneralConstants";
import ComponentCheckbox from "../input/ComponentCheckbox";


class ComponentTable extends Component {

    state={jsonDataList: [] , selectedTableData :[]}

    // componentDidMount =() => this._processDataForSearch(this.props.tableData);
    //
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     const newPropKeys = ["tableData"];
    //     return DataValidationUtility._checkIfPropsNotNullAndDiff(nextProps, prevState, newPropKeys);
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(prevState.tableData !== this.state.tableData)this._processDataForSearch(this.state.tableData);
    // }
    //
    // _processDataForSearch = (dataList) => {
    //     this.setState({selectedTableData:dataList , jsonDataList:  dataList.map(item => JSON.stringify(item))});
    // };
    //
    // _onChangeSearchValue = (e) =>{
    //     const selectedItems =  [];
    //     const searchString = e.target.value.toString();
    //     this.state.jsonDataList.map(item => {
    //         if (item.includes(searchString)){
    //             selectedItems.push(JSON.parse(item));
    //         }
    //     });
    //     this.setState({selectedTableData : selectedItems})
    // };


    getHeaderRows = () => this.props.columns.map(item => <Table.HeaderCell key={Math.random()}>{item.title}</Table.HeaderCell>)

    getDataRows = () => this.props.tableData.map( dataObject =>  <Table.Row key={Math.random()}>{this.getColumnData(dataObject)}</Table.Row>)

    getColumnData = (dataObject) =>this.props.columns.map(item => item.render ?
        <Table.Cell key={Math.random()}> {item.render(dataObject)} </Table.Cell> :
        <Table.Cell key={Math.random()}> {dataObject[item.dataIndex]} </Table.Cell>
    )

    render() {

        return (

            <div style={{textAlign:"start"}}>
                <Message style={{borderBottom:"1px solid"}} attached header={this.props.tableTitle} />
                <Table celled  selectable className={"segment attached"}>
                    <Table.Header>
                        <Table.Row>
                            {this.getHeaderRows()}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.props.loading? <Table.Row style={{height:"150px"}} >
                            <Table.Cell rowSpan='5' colSpan={this.props.columns.length.toString()}>
                                <Segment>
                                    <Dimmer active inverted>
                                        <Loader inverted>Loading</Loader>
                                    </Dimmer>

                                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                </Segment>
                            </Table.Cell>
                        </Table.Row> : this.getDataRows()}
                    </Table.Body>

                </Table>
            </div>
            // <div className={"card"}>
            //     <h2 style={{textAlign:"start"}}> {this.props.tableTitle} </h2>
            //
            // </div>


        )
    }
}

export default (ComponentTable);