import React from 'react';
import './componentTable.css';
import Axios from 'axios'
import GetFrame from './displayFrames/getFrame';
import PostFrame from './displayFrames/postFrame';
import DeleteFrame from './displayFrames/deleteFrame';

export default class ComponentTable extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      option: 0,
      key: "",
      token: "",
      board: "",
      listData: null,
      selectDisabled: true,
      txtDisabled: false,
      btnDisabled: false,
    };
  }

  /**selector Function*/
  selector = (event) => {
    //Setting state
    this.setState({option: event.target.selectedIndex});
  }

  /**update Function*/
  update = (event) => {
    //Checking component
    if(event.target.id === "txtKey"){
      //Setting state
      this.setState({key: event.target.value});
    }else if(event.target.id === "txtToken"){
      //Setting state
      this.setState({token: event.target.value});
    }else{
      //Setting state
      this.setState({board: event.target.value});
    }
  }

  /**check Function*/
  check = () => {
    //Declaring fields
    var url = ""

    //Creating url
    url = "https://api.trello.com/1/boards/" +
      this.state.board + "/lists?token=" +
      this.state.token + "&key=" +
      this.state.key;

    //Attempting to get data
    Axios.get(url)
      .then(res => {
        //Setting state
        this.setState({
          listData: res.data,
          selectDisabled: false,
          txtDisabled: true,
          btnDisabled: true,
        });
    }).catch(function(error){
        //Checking error
        if(error.response){
          //Displaying error message
          alert("Key, Token, or Board ID is invalid.");
        }
    });
  }

  /**displayOption Function*/
  displayOption = () => {
    //Declaring fields
    var frame;
    var index = this.state.option;

    //Checking selection
    if(index === 1){
      //Setting frame to get
      frame = (<GetFrame listData = {this.state.listData} keyID = {this.state.key} tokenID = {this.state.token}/>);
    }else if(index === 2){
      //Setting frame to post
      frame = (<PostFrame />);
    }else if(index === 3){
      //Setting frame to delete
      frame = (<DeleteFrame />);
    }

    //Returning frame
    return frame;
  }

  /**Rendering Webpage*/
  render(){
    return(
      <div>
        <br />
        <br />
        <table cellPadding = "5px" align = "center" width = "70%">
          <tbody>
            <tr>
              <td className = "left"> Key</td>
              <td>
                <input type = "text"
                  id = "txtKey"
                  value = {this.state.key}
                  disabled = {this.state.txtDisabled}
                  onChange = {this.update}/>
              </td>
            </tr>
            <tr>
              <td className = "left"> Token</td>
              <td>
                <input type = "text"
                  id = "txtToken"
                  value = {this.state.token}
                  disabled = {this.state.txtDisabled}
                  onChange = {this.update}/>
              </td>
            </tr>
            <tr>
              <td className = "left"> Board ID</td>
              <td>
                <input type = "text"
                  id = "txtBoard"
                  value = {this.state.board}
                  disabled = {this.state.txtDisabled}
                  onChange = {this.update}/>
              </td>
            </tr>
            <tr>
              <td className = "center" colSpan = "2">
                <input type = "button" id = "btnCheck" disabled = {this.state.btnDisabled} value = "Check Key/Token/ID" onClick = {() => {this.check()}}/>
              </td>
            </tr>
            <tr>
              <td className = "left"> Choose an option:</td>
              <td>
                <select disabled = {this.state.selectDisabled} defaultValue = "Choose Option" onChange = {this.selector}>
                  <option disabled hidden> Choose Option</option>
                  <option> GET</option>
                  <option> POST</option>
                  <option> DELETE</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        {this.displayOption()}
      </div>
    );
  }
}
