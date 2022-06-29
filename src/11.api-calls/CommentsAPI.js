import React, { Component } from 'react'

export class CommentsAPI extends Component {
    constructor() {
        super()

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => this.setState({ comments: data }))
    }

    render() {
        return (
            <div>
                <h1>Comments API</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.comments.map(comment => {
                                let { id, name, email, body } = comment
                                return <tr key={id}>
                                    <td>{name}</td>
                                    <td><a href={`mailto: ${email}?subject=${name}&body=${body}`}>{email}</a></td>
                                    <td>{body}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}

export default CommentsAPI