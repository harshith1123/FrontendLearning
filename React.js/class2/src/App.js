import React,{Component} from "react"
import "./App.css"
import Example1 from "./pages/Example1";
import Example2 from "./pages/Example2";

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="container">
        <h1>States and Props in Class Components</h1>
        {/* <Example1/> */}
        <Example2/>
      </div>
    )
  }
}

export default App;