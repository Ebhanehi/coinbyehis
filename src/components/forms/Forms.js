import React from "react";
import "./style.css";


class Form extends React.Component {
    constructor()   {
        super();
        this.state = {
            yname: "",
            lname: "",
            email: "",
            phone: "",
            msubject: "",
            Messages: "",
            Verification: "",

        };

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleChange.bind(this);
    }

    handleChange(e) {
     this.setState({value: e.target.value})

    }


    handleSubmit(e) {
        e.preventDefault();
        console.log("yname",this.state.yname)
        console.log("lname",this.state.lname)
        console.log("email",this.state.email)
        console.log("msubject",this.state.msubject)
        console.log("Messages",this.state.Messages)
        console.log("Verification",this.state.Verification)
    }

    render() {
        return(
            <div>
                <h1>Contact Form</h1>
                <form onSubmit={this.handleSubmit}>
                <label for="yname"> Your name: </label> 
               <input type="text"  placeholder="First Name" required  name="yname" value={this.state.yname} onChange={(e)=>{this.handleChange(e)}}/>
               
               <label for="lname"></label> 
               <input type="text"  placeholder="Last Name" required  name="lname" value={this.state.lname} onChange={(e)=>{this.handleChange(e)}}/>
                </form>
            </div>
        )
    }
}   


export default Form