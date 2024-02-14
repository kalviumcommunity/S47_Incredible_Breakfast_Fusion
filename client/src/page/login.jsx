import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
    const cookieData=(name,value)=>{
        document.cookie=`${name}={${value}}`;path="/";
    }

    return (
        <div className="App1">
            <h1 className="Login">Login </h1>
            <form className="login " onSubmit={(e) =>e.preventDefault()}>
                <br/>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter your name" onChange={(e)=>cookieData("name",e.target.value)} required/>
                <label htmlFor="email"  >Email</label>
                <input type="email" placeholder="Enter your email" onChange={(e)=>cookieData("email",e.target.value)} required/>
                <label htmlFor="Username">Username</label>
                <input type="text" placeholder="Enter your username" onChange={(e)=>cookieData("username",e.target.value)} required/>
                < Link to="/"><button type="submit">Login</button></Link>
            </form>
        </div>
    );
}

export default Login