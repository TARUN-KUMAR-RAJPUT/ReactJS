import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(){
        super()

        this.state ={

        }

        console.log('Constructor of B')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of B')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of B')
    }

  render() {
    console.log('render of B')
    
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB