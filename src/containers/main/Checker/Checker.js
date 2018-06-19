import React, { Component } from 'react';
import Qs from "qs";
import axios from "axios";

class Checker extends Component {
  constructor(){
    super();

  }

  enterInput = (e) => {
    e.preventDefault();
    console.log('entered');
    this.getInfo('4162142500');
  }

  getInfo(number) {
    axios({
      url: "https://proxy.hackeryou.com",
      method: "GET",
      dataResponse: "jsonp",
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: 'brackets' })
      },
      params: {
        reqUrl: 'https://proapi.whitepages.com/3.0/phone',
        params: {
          api_key: '685abbca338645cdb4fff623ce532a99',
          phone: number
        },
        proxyHeaders: {
          'headers_params': 'value'
        },
        xmlToJSON: false
      }
    }).then((res) => {
      console.log(res.data);

    });
  
  }

  render(){

    return(
      <form action="" onSubmit={this.enterInput}>
        <input type="text" placeholder='Enter Phone Number' name='number' />
        <button>Enter</button>
      </form>
    )
  }
};
  

export default Checker;