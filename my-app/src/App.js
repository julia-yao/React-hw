import React, { Component } from 'react';
class App extends Component{
    constructor(props) { // 加入建構子以及props參數
        super(props);
        this.name="哈哈";
        this.changeName=this.changeName.bind(this);
    };
    changeName(newName){ // 定義changeName
      this.name=newName;
      console.log("hey")
    };
    render(){
      return(
        <button onClick={this.changeName}>{this.name} </button>
      );
  }
  }
export default App;