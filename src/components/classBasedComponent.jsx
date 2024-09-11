import { Component } from "react";

class ClassBasedComponent extends Component {
  //state
  state = {
    showText: true,
    changeColorAndFont: false,
    count: 0,
  };

  handleClick = () => {
    console.log("button clicked");
    //this is not recommended
    // this.state.showText = !this.state.showText;

    //this is recommended  
    this.setState(
        {

            showText: !this.state.showText,  
        }
    );
    
  };

  //handle change color Event
  handleChangeColorAndFont = () => {
    this.setState({
      changeColorAndFont: !this.state.changeColorAndFont,
    });
  };

  //increase count
  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  
  };

  // change color and font using time interval
  componentDidMount() {
    /*setInterval(() => {
        this.setState({
         changeColorAndFont: !this.state.changeColorAndFont,
        });
     }, 2000);*/
  }

  componentDidUpdate(preProps, preState) {
    console.log("component updated");
    
    if(
      preState &&
      preState.count !== this.state.count &&
      this.state.count ===10
    ){
      this.setState(
      {
         ...this.state,
        changeColorAndFont: !this.state.changeColorAndFont,
      } );
    }
  

  }

  render() {
    console.log(this.state.count);
    return (
        <div>
           <h1>Hello am class based component</h1>
           {
               this.state.showText ?  <p style={{ color:this.state.changeColorAndFont ? "red" : "black"}}>am class based component</p> :null
             }
        <p>this is count : {this.state.count}</p>
          
       
        <button onClick={this.handleClick}>Toggle Text</button>
        <button onClick={this. handleChangeColorAndFont }>
          changeColorAndFont</button>
        <button onClick={this.increaseCount}>
          increaseCount</button>

       </div>
    );
  }
}

export default ClassBasedComponent;
