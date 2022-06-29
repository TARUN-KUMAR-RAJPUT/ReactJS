import React, {useState} from 'react'

function HookCounter() {
    //console.log(useState(0))
    const [count, setCount] = useState(0)

    function incrementCount(){
        setCount(count+1)
    }

  return (
    <div className="container">
        <h1>Count: {count}</h1>
        <button className="btn btn-primary"
                onClick={() => incrementCount()}
        >Increment</button>
    </div>
  )
}

export default HookCounter