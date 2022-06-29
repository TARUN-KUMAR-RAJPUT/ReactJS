import React, { Component } from 'react'

export class StudentMongoAPI extends Component {
    constructor(){
        super()

        this.state = {
            students: [],
            _id: '',
            name: '',
            email: '',
            city: ''
        }
    }

    componentDidMount(){
        this.getStudents()
    }

    getStudents(){
        fetch("http://localhost:3001/api/students")
        .then(response => response.json())
        .then(data => this.setState({students: data}))
    }

    clearFields(){
        this.setState({
            _id: '',
            name: '',
            email: '',
            city: ''
        })
    }

    addStudent(){
        const postData = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                city: this.state.city
            })
        }

        fetch("http://localhost:3001/api/students", postData)
        .then(response => response.json())
        .then(data => {
            this.getStudents()
            this.clearFields()
        })
    }

    editStudent(student){
        this.setState({
            _id: student._id,
            name: student.name,
            email: student.email,
            city: student.city
        })
    }

    updateStudent() {
        const putData = {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                city: this.state.city
            })
        }
       
        fetch(`http://localhost:3001/api/students/${this.state._id}`, putData)
        .then(response => response.json())
        .then(data => {
            this.getStudents()
            this.clearFields()
        })
    }

    deleteStudent(studentId){
        // const deleteData = {
        //     method: "DELETE"
        // }
        fetch(`http://localhost:3001/api/students/${studentId}`, {method: "DELETE"})
        .then(response => response.json())
        .then(data => {
            this.getStudents()
            this.clearFields()
        })
    }
  render() {
    return (
      <div className="container">
        <h1>Student List</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th colSpan={2} style={{textAlign: 'center'}}>Actions</th>
                </tr>
                <tr>
                    <th>
                        <input type="text" 
                               value={this.state.name} 
                               onChange={(event) => this.setState({name: event.target.value })}
                        />
                    </th>
                    <th>
                        <input type="text" 
                               value={this.state.email} 
                               onChange={(event) => this.setState({email: event.target.value })}
                        />
                    </th>
                    <th>
                        <input type="text" 
                               value={this.state.city} 
                               onChange={(event) => this.setState({city: event.target.value })}
                        />
                    </th>
                    <th>
                        <button className="btn btn-primary"
                                onClick={() => this.addStudent()}
                        >Add</button>
                    </th>
                    <th>
                        <button className="btn btn-warning"
                                onClick={() => this.updateStudent()}
                        >Update</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.students.map(student => (
                        <tr key={student._id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.city}</td>
                            <td>
                                <button className="btn btn-warning"
                                        onClick={() => this.editStudent(student)}
                                >Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger"
                                        onClick={() => this.deleteStudent(student._id)}
                                >Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default StudentMongoAPI