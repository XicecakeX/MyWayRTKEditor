import React from 'react';
import './frame.css';
import Axios from 'axios'
import ResultFrame from './resultFrame';

export default class GetFrame extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      disabled: false,
      txtDisabled: false,
      componentID: "",
      btnName: "",
      hidden: true,
      display: false,
      data: null,
      id: "",
    };
  }

  /**enable Function*/
  enable = (event) => {
    //Checking selection
    if(event.target.selectedIndex === 1){
      //Setting state
      this.setState({
        display: true,
        data: this.props.listData,
        id: "list",
      });
    }else{
      //Setting state
      this.setState({
        hidden: false,
        id: "card"
      });
    }
  }

  /**generateOptions Function*/
  generateOptions = () => {
    //Declaring fields
    var options = [];

    //Creating options
    for(var i = 0; i < this.props.listData.length; i++){
      //Storing in array
      options.push(<option key = {i}> {this.props.listData[i].name}</option>);
    }

    //Returning options
    return options;
  }

  /**displayResults Function*/
  displayResults = () => {
    //Declaring fields
    var display = this.state.display;
    var results;

    //Checking display boolean
    if(display === true){
      //Setting frame
      results = (<ResultFrame data = {this.state.data} id = {this.state.id}/>);
    }

    //Returning result frame
    return results;
  }

  /**getData Function*/
  getData = (event) => {
    //Declaring fields
    var listID;
    var url;

    //Getting list id
    listID = this.props.listData[event.target.selectedIndex - 1].id;

    //Setting URL
    url = "https://api.trello.com/1/lists/" +
      listID + "/cards?token=" +
      this.props.tokenID + "&key=" +
      this.props.keyID;

    //Getting data from url
    Axios.get(url)
      .then(res => {
        //Setting state
        this.setState({
          display: true,
          data: res.data,
        });
    });
  }

  /**Rendering Webpage*/
  render(){
    return(
      <div>
        <br />
        <table cellPadding = "5px" frame = "box" width = "60%" align = "center">
          <tbody>
            <tr>
              <td className = "left"> What component to view?</td>
              <td>
                <select defaultValue = "Choose Component" disabled = {this.state.disabled} onChange = {this.enable}>
                  <option disabled hidden> Choose Component</option>
                  <option> Lists</option>
                  <option> Cards</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className = "left"><span hidden = {this.state.hidden}> Available Lists</span></td>
              <td>
                <select defaultValue = "Choose List" hidden = {this.state.hidden} onChange = {this.getData}>
                  <option disabled hidden> Choose List</option>
                  {this.generateOptions()}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        {this.displayResults()}
      </div>
    );
  }
}
