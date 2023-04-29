import React, { Component } from 'react'

 class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            form:{
            name : "",
            email: "",
            number:"",
            class: ""
        } 

    }
       
  
    }
    handleChange(event) {
        this.setState({value:event.target.value})
    }

    handleSubmit(event) {
        alert('data has been submited:' + this.state.value)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label for="">name</label>
            <input type="text" name="" value={this.state.name}/>
            <label for="">email</label>
            <input type="email" name="" value={this.state.email}/>
            <label for="">rollno</label>
            <input type="number" name="" value={this.state.number}/>
            <label for="">class</label>
            <input type="text" name="" value={this.state.class}/>
            <button type="submit">Submit</button>
        </form>

        {/* <div>
            Form
        </div>
        <div>
        <input type="text" name="" value="" placeholder="Enter your name"/>
        <input type="email" name="" value="" placeholder="Enter your email"/>
        <input type="number" name="" value="" placeholder="Enter your number"/>
        <input type="text" name="" value="" placeholder="Enter your text"/>
        </div> */}
      </div>
    )
  }
}

export default Form;

