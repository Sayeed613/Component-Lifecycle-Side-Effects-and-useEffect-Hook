import  React ,{ useEffect, useState } from "react";
import axios from "axios";

function FetchData(){
    const[data, setData] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts?limit=10")
        .then(response => {
            setData(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchData;