import axios from 'axios'
import React, { useState } from 'react'


const Albums = () => {
 const [data, setdata] = useState([])

    const fetchAlbums=async()=>{
        const response= await axios.get("https://jsonplaceholder.typicode.com/albums")
        
        setdata(response.data)
    }
  return (
    <div>Albums
        <button onClick={fetchAlbums}>getalbum</button>
        
        {data.map(Albums=>(
            <div key={Albums.id}>
                <p>{Albums.title}</p>
            </div>
        ))}
    </div>
  )
}

export default Albums