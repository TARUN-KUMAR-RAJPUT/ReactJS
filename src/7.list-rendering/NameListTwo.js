import React from 'react'

function NameListTwo() {
    const names = ["Scott", "Adam", "Tuan", "Adam"]
  return (
    <div>
        {/* {
            names.map(function(name){
                return <h2>{name}</h2>
            })
        } */}
        {/* {
            names.map((name) =>{
                return <h2>{name}</h2>
            })
        } */}
        {
            names.map((name, index) => <h2 key={index}>{name}</h2>)
        }
    </div>
  )
}

export default NameListTwo