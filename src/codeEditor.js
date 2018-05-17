import React from 'react';
import './codeEditor.css';
import ComponentTable from './componentTable';
import Axios from 'axios'

export default class CodeEditor extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      id: 0,
    };
  }

  /**displayResults Function*/
  getFunction = () => {
    //Declaring fields
    var listArray = [];

    Axios.get('https://api.trello.com/1/boards/RGCFsQyp/lists?token=0335157f3c40fd6ef97e87b28b6d6df836a30570a0ba1214e1efadf2092a79ed&key=d365adc776e3943377875643eba77121')
      .then(res => {
        for(var i = 0; i < res.data.length; i++){
          //Adding list to array
          listArray.push(res.data[i]);
        }

        //Setting state
        this.setState({id: listArray[0].id});
    });
  }

  render(){
    return(
      <div>
        <div>
          {this.getFunction()}
        </div>
        <div>
          <ComponentTable />
        </div>
      </div>
    );
  }
}
