import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Axios from 'axios'
import '../App.css'

function MainPage() {

    const [postList, setPostList] = useState([]);
    const navigate = useNavigate(); 


    useEffect(() => {
        Axios.get("http://localhost:3002/api/getTen").then((data) => {
            setPostList(data.data)
        });
    }, [])

    return (
        <div className="MainPage">
            <h1>Guestbook</h1>
            <h2>See what people wrote about us and feel free to leave a message</h2>
            <div className="PostContainer">
                {postList.map((val, key) => {
                    return (
                        <div className="Post" key={key}>
                            <h4>{val.name}</h4>
                            <p>{val.message.length > 300 ? val.message.substring(0, 100) + " ..." : val.message}</p>
                        </div>
                    )
                })}

            </div>
            <button onClick={()=> navigate('/createPost')}>Leave a message! </button>
        </div>
    )
}

export default MainPage