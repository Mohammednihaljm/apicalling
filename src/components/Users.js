import React, { useState } from 'react'
import axios from 'axios'

const Users = () => {
    const [data, setdata] = useState([])
    const fetchUser= async()=>{
       const response=await axios.get("https://jsonplaceholder.typicode.com/users")
       setdata(response.data)
        
    }
  return (
    <div>I AM USERS
        <button onClick={fetchUser}>get users</button>
        {
            data.map(user=>(
            <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.address.city}</p>
            </div>
            ))
        }
    </div>
  )
}

export default Users