import React from 'react'

function Child(props) {
    console.log(props)
  return (
    <div>
        <button className="btn btn-primary"
                onClick={() => props.callParent('Child')}
        >Call Parent Method</button>
    </div>
  )
}

export default Child