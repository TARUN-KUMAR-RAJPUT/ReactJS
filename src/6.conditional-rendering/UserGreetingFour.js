import React, { Component } from 'react'

class UserGreetingFour extends Component {
    constructor(){
        super()

        this.state = {
            isLoggedIn: true,
           // isAdmin: true
        }
    }
  render() {
    return (
        this.state.isLoggedIn && <div><h1>Welcome Scott</h1></div>
        //this.state.isAdmin
    )
  }
}

export default UserGreetingFour