// variables in class components - 
/* databinding => declaring the variables and accessing the value to print on DOM */

import React, {Component} from "react";

//variables:- These variables are private and we cannot access in any other component and even in parent also
// React will never allow to print a boolean value in virtual DOM
// React will never allow looping statements, it will allow only map
let x = 12;
const y = 33;
let str = "This is a string"
let isView = false
const users = ["john","harry","sam","tom"]
let bank ={
    name: "SBI",
    type: "savings",
    accNo: 12334
}

class Page4 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>Databinding in Component</h2>
                <hr />
                <h3>x = {x} and y = {y} and product = {x*y}</h3>

                <hr />
                <h3>string = {str}</h3>
                <hr />
                <h3>boolean = {isView? "say true" : "say false"}</h3>

                <hr />
                <h3>bank name = {bank.name} and account type = {bank.type} and account number ={bank.accNo}</h3>

                <hr />
                <div>
                    {
                        users.map(function(val,index){
                            return(
                                <p key = {index}> {val} </p>
                            )
                        })
                    }
                </div> 
            </div>
        )
    }
}

export default Page4