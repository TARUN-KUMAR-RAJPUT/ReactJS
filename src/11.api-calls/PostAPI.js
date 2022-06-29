import React, { Component } from 'react'

export class PostAPI extends Component {
    constructor(){
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => this.setState({posts: data}))
    }
  render() {
    return (
      <div>
        <h2>Post List </h2>
        {/* {
            this.state.posts.map(post => (
                <ul key={post.id}>
                    <li>{post.title}</li>
                    <li>{post.body}</li>
                </ul>
            ))
        } */}
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.posts.map(post => (
                        <tr>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default PostAPI