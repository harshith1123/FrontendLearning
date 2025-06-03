import React, {Component} from "react"
import UserImage from "./UserImage"
import Info from "./Info"
import Page4 from "../pages/Page4"

// any data in the jsx component attribute is called props
export default class UserCard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {name,image,email,mobile,address} = this.props.userInfo
        return(
            <div className="card">
                User Card
                <h3 className="name">{name}</h3>                
                <UserImage srcUrl={image} txt={"no image found"} class={"user-image"}/>
                <Info label={"email id: "} msg={email}/>
                <Info label={"mobile number:"} mobile={mobile}/>
                <Info label ={"city:"} city={address?.city}/>
                <Info label ={"Zip Code:"} zipCode={address?.pin}/>
                
            </div>
        )
    }
}