import React, { useState } from 'react';
import Axios from 'axios'
import '../App.css'
import { useNavigate } from "react-router-dom"


function CreatePost() {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [submited, setSubmited] = useState(false);
    const [status, setStatus] = useState('');
    const navigate = useNavigate(); 


    const submitPost = () => {
        if (Axios.post('http://localhost:3002/api/create', { name: name, message: message })) {
            setSubmited(true);
            setStatus('Success!')
        } else {
            setStatus('Failed!')
        }
    }

    return (
        <form className="CreatePost">
            <div className="uploadPost">
                <label>Name: </label>
                <input type="text" onChange={(e) => {
                    setName(e.target.value)
                }} />
                <label>Message</label>
                <textarea
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                ></textarea>
                <button disabled={submited} onClick={submitPost}>Post</button>
                {submited && <p>{status}</p>}
                { submited && <button onClick={()=> navigate('/')}>Return to Guestbook</button>}
                { submited && <button onClick={()=> navigate('/createPost')}>Add another message</button>}

            </div>
        </form>
    )
}

export default CreatePost