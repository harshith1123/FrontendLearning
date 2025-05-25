// databinding in functional component
import React from "react";

// variables
let a = 65;
const b = 45;
let txt = "Welcome to react String"
let isAdmin = true
const colors = ["red","white","blue","yellow"]
let car ={
    name: "Crysta",
    color: "White",
    fuel: "Diesel",
    make: 2024 
}

function Page5(props){
    return(
        <div>
            <h2>Databinding in functional components</h2>
            <hr />
            <h3>a = {a} and b = {b} and sum is = {a + b}</h3>
        </div>
    )
}

export default Page5