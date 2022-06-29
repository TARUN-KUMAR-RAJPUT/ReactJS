import React, { Component } from 'react'
import LifecycleB from './LifeCycleB'

export class LifecycleA extends Component {
    constructor(){
        super()

        this.state ={

        }

        console.log('Constructor of A')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of A')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of A')
    }

  render() {
    console.log('render of A')
    
    return (
      <div>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA