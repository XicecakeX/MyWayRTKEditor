import React from 'react';
import './componentTable.css';
import GetFrame from './displayFrames/getFrame';
import PostFrame from './displayFrames/postFrame';
import DeleteFrame from './displayFrames/deleteFrame';

export default class ComponentTable extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      displayFrame: null,
      option: 0,
    };
  }

  /**selector Function*/
  selector = (event) => {
    //Setting state
    this.setState({option: event.target.selectedIndex});
  }

  /**displayOption Function*/
  displayOption = () => {
    //Declaring fields
    var frame;
    var index = this.state.option;

    //Checking selection
    if(index === 1){
      //Setting frame to get
      frame = (<GetFrame />);
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
              <td className = "left"> Choose an option:</td>
              <td>
                <select defaultValue = "Choose Option" id = "options" onChange = {this.selector}>
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
