import React, {Component} from "react"
import {users} from '../data/users'
import UserCard from "../components/UserCard"

export default class Page4 extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="card-container">
                <h1>Page-4</h1>
                <div>
                {
                    users?.map((item,index)=>{
                        return(
                            <UserCard key={index} userInfo={item}/>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}