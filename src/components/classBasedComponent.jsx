import { Component } from "react";

class ClassBasedComponent extends Component {
  //state
  state = {
    showText: true,
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
    console.log(this.state);
  };

  render() {
    console.log(this.state);
    return (
        {
            this.state.showText && <p>class based component</p> ,
            
        }
      <div>
        <h1>Hello am class based component</h1>
        <button onClick={this.handleClick}>Toggle Text</button>
      </div>
    );
  }
}

export default ClassBasedComponent;
