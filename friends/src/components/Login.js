import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [input, setInput] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();
    
    const onChange = evt => {
        setInput(evt.target.value)
    }

    const loginRequest = evt => {
        evt.preventDefault();
        setIsLoading("Loading...");
        axios.post("http://localhost:5000/api/login", { username: 'Lambda School', password: 'i<3Lambd4' })
             .then(res => {
                 console.log(res.data.payload)
                 localStorage.setItem("token", JSON.stringify(res.data.payload))
                 history.push("/privateroute")
                })
             .catch(err => console.log({ err }));
        setIsLoading(false);
        console.log("History: ", history);
    }

    return (
    <>
    <form>
        <input type="text" onChange={onChange} ></input>
        <input type="password" onChange={onChange} ></input>
        <button onClick={loginRequest}>Login</button>
    </form>
    <p>{isLoading}</p>
    </>
    );
}

export default Login;
