import React from "react";
import { Link } from "react-router-dom";

function Login() {
    const cookieData=(name,value)=>{
        document.cookie=`${name}={${value}}`;path="/";
    }

    return (
        <div>
            <form className="login " onSubmit={(e) =>e.preventDefault()}>
                <h1>Login</h1>
                <br/>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Enter your name" onChange={(e)=>cookieData("name",e.target.value)}/>
                <label htmlFor="email"  >Email:</label>
                <input type="email" placeholder="Enter your email" onChange={(e)=>cookieData("email",e.target.value)}/>
                <label htmlFor="Username">Username:</label>
                <input type="text" placeholder="Enter your username" onChange={(e)=>cookieData("username",e.target.value)}/>
                < Link to="/"><button type="submit">Login</button></Link>
            </form>
        </div>
    );
}

export default Login