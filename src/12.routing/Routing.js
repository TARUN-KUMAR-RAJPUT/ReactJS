import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import StudentMongoAPI from '../11.api-calls/StudentMongoAPI'
import UserAPI from '../11.api-calls/UserAPI'
import UserForm from '../9.form-data/UserForm'

const Deafult = () => <div className="container"><h1>Welcome to ReactJS Tutorial</h1></div>
const Contact = () => <div className="container"><h1>For any enquiries contact Sales office</h1></div>
const Error =() => <div className="container"><h1>Please contact the administrator</h1></div>

function Routing() {
  return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">React</Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to="/home" className="nav-item nav-link active">Home</Link>
                        <Link to="/user" className="nav-item nav-link">Users</Link>
                        <Link to="/student" className="nav-item nav-link">Students</Link>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<Deafult />}></Route>
            <Route path="/home" element={<UserForm />}></Route>
            <Route path="/user" element={<UserAPI />}></Route>
            <Route path="/student" element={<StudentMongoAPI />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
        </Routes>
    </Router>
  )
}

export default Routing