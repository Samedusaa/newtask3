import React, {Component} from "react";

export default class PersonalInfo extends Component{
    render(){
        return(
            
            <div className="personal"> 
                <p>Phone Number: {this.props.personalNum} </p>
            </div>
        )
    }
}