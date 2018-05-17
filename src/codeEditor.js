import React from 'react';
import './codeEditor.css';
import Axios from 'axios'

export default class CodeEditor extends React.Component{

  /**displayResults Function*/
  getFunction = () => {
    Axios.get('https://api.trello.com/1/tokens/0335157f3c40fd6ef97e87b28b6d6df836a30570a0ba1214e1efadf2092a79ed/member?oauth_consumer_key=d365adc776e3943377875643eba77121&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1526493137&oauth_nonce=imoLFR&oauth_version=1.0&oauth_signature=lzDbhu4+V6IqOK7b2nkV+l2fbDo=&token=0335157f3c40fd6ef97e87b28b6d6df836a30570a0ba1214e1efadf2092a79ed&key=d365adc776e3943377875643eba77121')
      .then(res => {
        console.log(res.data.fullName);
      });
  }

  render(){
    return(
      <div>
        {this.getFunction()}
      </div>
    );
  }
}
