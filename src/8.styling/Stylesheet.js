import React from 'react'
import './Styling.css'

function Stylesheet(props) {
    let className = props.primary ? "primary" : "secondary"
  return (
    <div>
        <h1 className={className}>This is first Header</h1>
        <h1 className={`${className} enlarge-text`}>This is second Header</h1>
    </div>
  )
}

export default Stylesheet