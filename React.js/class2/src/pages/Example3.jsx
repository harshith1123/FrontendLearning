import React,{Component} from 'react'
import UserCard from '../components/UserCard'

class Example3 extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{
                name:"john",
                image:"https://picsum.photos/id/35/500/500",
                email:"john@gmail.com",
                mobile:"7019333451",
                address:{
                    city:"bangalore",
                    pin:"560010"
                }

            }
        }
    }
    render(){
        return(
            <div>
                <h1>Props</h1>
                <UserCard userInfo={this.state.user}/>
            </div>
        )
    }
}

export default Example3