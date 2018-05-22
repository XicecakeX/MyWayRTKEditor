import React from 'react';
import './frame.css';

export default class ResultFrame extends React.Component{
  /**generateTable Function*/
  generateTable = () => {
    //Declaring fields
    var data = this.props.data;
    var rows = [];

    //Checking props
    if(this.props.id === "list"){
      //Creating rows
      for(var i = 0; i < data.length; i++){
        //Storing in array
        rows.push(
          <tr key = {i}>
            <td className = "number"> {i + 1}</td>
            <td className = "data"> {data[i].id}</td>
            <td className = "data"> {data[i].name}</td>
          </tr>
        );
      }
    }else{
      //Creating rows
      for(var j = 0; j < data.length; j++){
        //Storing in array
        rows.push(
          <tr key = {j}>
            <td className = "number"> {j + 1}</td>
            <td className = "data"> {data[j].id}</td>
            <td className = "data"> {data[j].name}</td>
            <td className = "data"> {data[j].desc}</td>
          </tr>
        );
      }
    }

    //Returning table
    return rows;
  }

  /**displayResults Function*/
  displayResults = () => {
    //Declaring fields
    var table;
    var data = this.props.data;

    //Checking id
    if(this.props.id === "list"){
      //Setting table
      table = (
        <table className = "result" cellPadding = "5px" align = "center">
          <tbody>
            <tr>
              <th className = "number"> #</th>
              <th> ID</th>
              <th> Name</th>
            </tr>
            {this.generateTable()}
          </tbody>
        </table>
      );
    }else{
      //Setting table
      table = (
        <table className = "result" cellPadding = "5px" align = "center">
          <tbody>
            <tr>
              <th colSpan = "2" className = "left"> List ID:</th>
              <td colSpan = "2"> {data[0].idList}</td>
            </tr>
            <tr>
              <th className = "number"> #</th>
              <th> ID</th>
              <th> Name</th>
              <th> Description</th>
            </tr>
            {this.generateTable()}
          </tbody>
        </table>
      );
    }

    //Returning table
    return table;
  }

  /**Rendering Webpage*/
  render(){
    return(
      <div>
        <br />
        {this.displayResults()}
      </div>
    );
  }
}
