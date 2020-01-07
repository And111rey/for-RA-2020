import React, { Component } from "react";
import "./App.css";
import { JustComponent } from "./components/JustComponent";

class App extends Component {
    state = {
        name: "",
        sureName: ""
    };

    setParamsFromBottomComponent = (name, sureName) => this.setState({...this.state, name, sureName})
    
    cleanAll = () => this.setState({name: "", sureName: ""})

    render() {
      const {name, sureName} = this.state
        return (
          <div className="App">
            <JustComponent onPost={this.setParamsFromBottomComponent} cleanAll={this.cleanAll}/>
            <div>
              <div>{name}</div>
              <div>{sureName}</div>
            </div>
          </div>
        )
        
    }
}

export default App;
