import React from 'react'

function NameListFive() {
    const users = [
        {
            id:1,
            name: "Scott",
            age: 46,
            skill: 'ReactJS'
        },
        {
            id:2,
            name: "Adam",
            age: 44,
            skill: 'Angular'
        },
        {
            id:3,
            name: "Tuan",
            age: 42,
            skill: 'NodeJS'
        },
        {
            id:4,
            name: "Uma",
            age: 40,
            skill: 'JavaScript'
        }
    ]
    return(
        // users.map(user => {
        //     return <div key={user.id}>
        //                 <h2>{user.id}</h2>
        //                 <h2>{user.name}</h2>
        //                 <h2>{user.age}</h2>
        //                 <h2>{user.skill}</h2>
        //                 <br />
        //            </div>
        // })
        users.map(user =>  (
                <div key={user.id}>
                    <h2>{user.id}</h2>
                    <h2>{user.name}</h2>
                    <h2>{user.age}</h2>
                    <h2>{user.skill}</h2>
                    <br />
                </div>
        ))
    )
}
export default NameListFive