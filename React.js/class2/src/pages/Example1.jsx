import React from 'react';

// let x = 20;
// states:- State is the React object to define local variable and any modifications is needed, it will effect and reflect it on virtual DOM.
// States cannot be transferred to another component, it is private to its component.
class Example1 extends React.Component{
    constructor(props){
        super(props)     
        this.state = {
            x:0
        }   
    }
    incVal(val){
        console.log("value = ",val)
        // x = x+val;
        // When component need to be modified it need to be rerendered
        this.setState({
            x: this.state.x + val
        })
    }

    decVal(val){
        console.log("val =",val)
        this.setState({
            x:this.state.x - val
        })
    }
    render(){
        console.log("Component rendered")
        return(
            <div>
                <h1>States</h1>
                <h3>x={this.state.x}</h3>
                <button onClick={()=> this.incVal(1)}>Add+1</button>
                <button onClick={()=> this.incVal(5)}>Add+5</button>
                <button onClick={()=> this.incVal(20)}>Add+20</button>
                <button onClick={()=> this.decVal(10)}>Sub-10</button>
            </div>
        )
    }
}

export default Example1