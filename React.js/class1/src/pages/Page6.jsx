import React from "react";

// variables
let p = 12;
const q = 33;
let title = "string in arrow functional component"
let isUser = false
const tech = ["html","css","javascript"]
let course ={
    title: "React",
    type: "Frontend library",
    duration: 1
}

const Page6 = (props) => {
    return(
        <div>
            <h3>Databinding in Arrow functional component</h3>
            <div>
                {
                    tech.map(function(val,index){
                        return(
                            <h1 key={index}>Techs are ={val}</h1>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Page6