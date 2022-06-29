import React from 'react'

const Greeting = (props) => {
    console.log(props)
    const { id, name, isAdmin, department, details, address, displayOne, displayTwo, subjects, children } = props
    return (
        <div>
            <h2>Id: {id}</h2>
            <h2>Name: {name}</h2>
            <h2>IsAdmin: {isAdmin ? "True" : "False"}</h2>
            <h2>Department: {department ? department : "No Department found"}</h2>
            <h2>Details: {details ? details : "No details found"}</h2>
            <h2>City: {address.city}</h2>
            <h2>MessageOne: {displayOne()}</h2>
            <h2>MessageTwo: {displayTwo()}</h2>
            <h2>Subject: {subjects[0]}</h2>
            <h2>Child: {children}</h2>
        </div>
    )
}

export default Greeting