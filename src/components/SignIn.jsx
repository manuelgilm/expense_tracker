import React, { useState } from "react"
import axios from "axios"
import "../index.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';


function SignIn(){
    const [user, setUser] = useState({
        username:"",
        email:"",
        password:""
    })
    
    function handleChange(event){
        const {name, value} = event.target
        setUser(preValue => {
            return {
            ...preValue,
            [name]:value}
        })
    }

    const navigate = useNavigate();
    const goHome = () => { 
      navigate("/home");
    }
    const goSingUp = ()=>{
        console.log(localStorage.getItem("token"))
        navigate("/sign-up")
    }

    function onSubmit(e){
        e.preventDefault()
        axios.post("http://localhost:5000/users/login", user)
        .then(()=>{
            goHome()
        })
        .catch(()=>{
            goSingUp()
        })
    }

    return (
        <form onSubmit={onSubmit}>

            <h3>Sign In</h3>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter username" value={user.username} name="username" onChange={handleChange}></input>

            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" value={user.email} name="email" onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" value={user.password} name="password" onChange={handleChange} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
        </form>
    )
}

export default SignIn