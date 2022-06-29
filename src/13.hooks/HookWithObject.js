import React, {useState} from 'react'

function HookWithObject() {
    const [user, setUser] = useState({firstName: '', lastName: ''})
  return (
    <div className="container">
        <br />
        <form>
            <div>
                <label >FirstName:</label>
                <input type="text" 
                       value={user.firstName} 
                       className="form-control w-50"
                       onChange={(event) => setUser({...user, firstName: event.target.value})}
                />
            </div>
            <br />
            <div>
                <label >Lastname:</label>
                <input type="text" 
                       value={user.lastName} 
                       className="form-control w-50"
                       onChange={(event) => setUser({...user, lastName: event.target.value})}
                />
            </div>
            <br />
            <h2>Firstname is : {user.firstName} </h2>
            <h2>Lastname is : {user.lastName}</h2>
        </form>
    </div>
  )
}

export default HookWithObject