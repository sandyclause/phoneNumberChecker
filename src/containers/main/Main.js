import React, { Component } from 'react';
import Qs from "qs";
import axios from "axios";
import Checker from './Checker/Checker';
import InfoDisplay from '../../components/InfoDisplay/InfoDisplay';

class Main extends Component{
  constructor(){
    super();
    this.state = {
      info: {}
    }
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
      this.setState({
        info: res.data
      })
    });

  }

  enterInput = (e) => {
    e.preventDefault();
    console.log('entered');
    console.log(e.currentTarget.elements[0].value);
    this.getInfo(e.currentTarget.elements[0].value);

  }

  render(){
    return(
      <div>
        <Checker enterInput={this.enterInput} />
        <InfoDisplay carrier={this.state.info.carrier} />
      </div>
    )
  }
}

export default Main;