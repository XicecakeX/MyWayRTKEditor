import React from 'react';
import './frame.css';

export default class PostFrame extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      disabled: false,
      btnDisabled: false,
      txtDisabled: true,
      hidden: true,
      componentID: "",
      listID: "",
    };
  }

  /**enable Function*/
  enable = (event) => {
    //Checking selection
    if(event.target.selectedIndex === 1){
      //Setting state
      this.setState({
        componentID: "",
        btnName: "Add a List",
        hidden: false,
        id: "Board ID",
      });
    }else{
      //Setting state
      this.setState({
        componentID: "",
        btnName: "Get Card Information",
        hidden: false,
        id: "List ID",
      });
    }
  }

  /**update Function*/
  update = (event) => {
    //Setting state
    this.setState({componentID: event.target.value});
  }

  /**display Function*/
  display = () => {

  }

  //Rendering component
  render(){
    return(
      <div>
        <br />
        <table cellPadding = "5px" frame = "box" width = "60%" align = "center">
          <tbody>
            <tr>
              <td className = "left"> What component to add?</td>
              <td>
                <select defaultValue = "Choose Component" disabled = {this.state.disabled} onChange = {this.enable}>
                  <option disabled hidden> Choose Component</option>
                  <option> List</option>
                  <option> Card</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className = "left"><span hidden = {this.state.hidden}> {this.state.id}</span></td>
              <td>
                <input type = "text"
                  id = "txtComponent"
                  value = {this.state.componentID}
                  hidden = {this.state.hidden}
                  disabled = {this.state.txtDisabled}
                  onChange = {this.update}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
