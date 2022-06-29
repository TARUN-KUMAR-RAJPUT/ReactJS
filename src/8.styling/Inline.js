import React from 'react'

function Inline() {
    const heading = {
        fontSize: '72px',
        color: 'blue'
    }
  return (
    <div>
        <h1 style={heading}>A blue header of size 72px</h1>
        <h1 style={{backgroundColor: 'crimson', color:'white'}}>This is another Header</h1>
    </div>
  )
}

export default Inline