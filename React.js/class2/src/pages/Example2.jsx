import React from "react"

class Example2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            num:12,
            msg:"Welcome to react states",
            isView:false,
            users:["john","tom","sam"],
            bank:{
                name:"SBI",
                type:"Savings"
            }
        }
    }
    render(){
        return(
            <div className="container">
                <h1>State</h1>
                <h3>number:{this.state.num}</h3>
                <hr />
                <h3>string ={this.state.msg}</h3>
                <hr />
                <h3>boolean = {this.state.isView? "Say True":"Say False"}</h3>
                <hr />
                <h3>array</h3>
                <ul>
                    {
                        this.state.users.map(function(val,index){
                            <li key={index}>{val}</li>
                        })
                    }
                </ul>
                <hr />
                <h3>Object</h3>
                <p>bank name = {this.state.bank.name} and account type is {this.state.bank.type}</p>
            </div>
        )
    }
}

export default Example2;