import React from 'react'
import User from './User'

function NameListSix() {
    const users = [
        {
            id: 1,
            name: "Scott",
            age: 46,
            skill: 'ReactJS'
        },
        {
            id: 2,
            name: "Adam",
            age: 44,
            skill: 'Angular'
        },
        {
            id: 3,
            name: "Tuan",
            age: 42,
            skill: 'NodeJS'
        },
        {
            id: 4,
            name: "Uma",
            age: 40,
            skill: 'JavaScript'
        }
    ]
    return (
        <React.Fragment>
            <h1>User List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (<User key={user.id} user={user} />))
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}
export default NameListSix