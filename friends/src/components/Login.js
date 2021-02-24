import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const initialFormValues = {
    username: "",
    password: "",
}

const Login = () => {
    const [input, setInput] = useState(initialFormValues)
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();
    
    const onChange = evt => {
        console.log(evt.target.name)
        setInput({...input, [evt.target.name]: evt.target.value})
        console.log(input)
    }

    const loginRequest = evt => {
        evt.preventDefault();
        setIsLoading("Loading...");
        axios.post("http://localhost:5000/api/login", input)
             .then(res => {
                 //console.log(res.data.payload)
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
        <input type="text" onChange={onChange} value={input.username} name="username" placeholder="username..." ></input>
        <input type="password" onChange={onChange} value={input.password} name="password" placeholder="password" ></input>
        <button onClick={loginRequest}>Login</button>
    </form>
    <p>{isLoading}</p>
    </>
    );
}

export default Login;
