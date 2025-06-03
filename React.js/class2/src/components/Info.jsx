import React, {Component} from 'react'

export default class Info extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {msg, css, label, mobile, city, zipCode} = this.props
        return(
            <p className={css}>
                <strong>{label}</strong>
                <span>{msg}</span>
                <span>{mobile}</span>
                <span>{city}</span>
                <span>{zipCode}</span>
            </p>
        )
    }
}