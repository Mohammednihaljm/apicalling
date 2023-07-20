import React, { useState } from 'react'
import axios from 'axios'

const Comments = () => {
    const [data, setdata] = useState([])

    const fetchComments=async()=>{
       const response= await axios.get("https://jsonplaceholder.typicode.com/comments")
       setdata(response.data)
    }

  return (
    <div>Comments
        <button onClick={fetchComments}>get comments</button>
        {
            data.map(Comments=>(
                <div key={Comments.id}>
                    {Comments.name}
                    {Comments.email}
                </div>

            ))
        }
    </div>

  )
}

export default Comments