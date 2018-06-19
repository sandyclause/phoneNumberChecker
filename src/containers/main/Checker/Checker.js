import React, { Component } from 'react';


class Checker extends Component {
  constructor(){
    super();

  }

 



  render(){

    return(
      <form action="" onSubmit={(e) => this.props.enterInput(e)}>
        <input type="text" placeholder='Enter Phone Number' name='number' />
        <button>Enter</button>
      </form>
    )
  }
};
  

export default Checker;