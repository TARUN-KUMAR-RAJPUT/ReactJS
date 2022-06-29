import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log('Button is clicked - Class')
    }

  render() {
    return (
      <div>
        <br />
        <button className="btn btn-primary" onClick={this.clickHandler}>Click Me - Class</button>
      </div>
    )
  }
}

export default ClassClick