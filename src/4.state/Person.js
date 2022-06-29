import React, { Component } from 'react'

 class Person extends Component {
    constructor(){
        super()

        this.state = {
            name: "Scott",
            email: "scott@ef.com",
            city: "Boston",
            isAdmin: true
        }
    }
    
  render() {
    const {name, email, city, isAdmin} = this.state
    return (
      <div>
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        <h2>City: {city}</h2>
        <h2>IsAdmin: {isAdmin? "True": "False"}</h2>
      </div>
    )
  }
}

export default Person