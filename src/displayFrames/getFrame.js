import React from 'react';
import './frame.css';
import Axios from 'axios'

export default class GetFrame extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      disabled: true,
      boardID: "",
      key: "",
      token: "",
      btnName: "",
      hidden: true,
    };
  }

  /**enable Function*/
  enable = (event) => {
    //Checking selection
    if(event.target.selectedIndex === 1){
      //Setting state
      this.setState({
        disabled: false,
        boardID: "",
        key: "",
        token: "",
        btnName: "Get List Information",
        hidden: false,
      });
    }else{
      //Setting state
      this.setState({
        disabled: false,
        boardID: "",
        key: "",
        token: "",
        btnName: "Get Card Information",
        hidden: false,
      });
    }
  }

  /**update Function*/
  update = (event) => {
    //Checking component
    if(event.target.id === "txtBoard"){
      //Setting state
      this.setState({boardID: event.target.value});
    }else if(event.target.id === "txtKey"){
      //Setting state
      this.setState({key: event.target.value});
    }else{
      //Setting state
      this.setState({token: event.target.value});
    }
  }

  /**getData Function*/
  getData = () => {
    //Declaring fields
    var url = "";

    url = "https://api.trello.com/1/boards/" +
      this.state.boardID + "/lists?token=" +
      this.state.token + "&key=" +
      this.state.key;

    Axios.get(url).then(res => {
      console.log(res.data);
    });
  }

  /**Rendering Webpage*/
  render(){
    return(
      <div>
        <br />
        <br />
        <table cellPadding = "5px" frame = "box" width = "60%" align = "center">
          <tbody>
            <tr>
              <td className = "left"> What component?</td>
              <td>
                <select defaultValue = "Choose Component" onChange = {this.enable}>
                  <option disabled hidden> Choose Component</option>
                  <option> Lists</option>
                  <option> Cards</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className = "left"> Board ID</td>
              <td>
                <input type = "text" id = "txtBoard" value = {this.state.boardID} disabled = {this.state.disabled} onChange = {this.update}/>
              </td>
            </tr>
            <tr>
              <td className = "left"> Key</td>
              <td>
                <input type = "text" id = "txtKey" value = {this.state.key} disabled = {this.state.disabled} onChange = {this.update}/>
              </td>
            </tr>
            <tr>
              <td className = "left"> Token</td>
              <td>
                <input type = "text" id = "txtToken" value = {this.state.token} disabled = {this.state.disabled} onChange = {this.update}/>
              </td>
            </tr>
            <tr>
              <td className = "center" colSpan = "2">
                <input type = "button" hidden = {this.state.hidden} value = {this.state.btnName} onClick = {() => {this.getData()}}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
