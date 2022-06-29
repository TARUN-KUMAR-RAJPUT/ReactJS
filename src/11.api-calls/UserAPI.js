import axios from 'axios'
import React, { Component } from 'react'

export class UserAPI extends Component {
    constructor() {
        super()

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(response => response.json())
        // .then(data => this.setState({users: data}))

        axios("https://jsonplaceholder.typicode.com/users")
            .then(response => this.setState({ users: response.data }))
    }
    render() {
        return (
            <div className="container">
                <h1>User List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Zipcode</th>
                            <th>Latitude</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user => {
                                const { id, name, email, address, phone, website, company } = user

                                return <tr key={id}>
                                    <td>{name}</td>
                                    <td><a href={`mailto:${email}`}>{email}</a></td>
                                    <td>{address.city}</td>
                                    <td>{address.zipcode}</td>
                                    <td>{address.geo.lat}</td>
                                    <td><a href={`tel:${phone}`}>{phone}</a></td>
                                    <td><a href={`http://${website}`} target="_blank">{website}</a></td>
                                    <td>{company.name}</td>
                                </tr>
                            })
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}

export default UserAPI