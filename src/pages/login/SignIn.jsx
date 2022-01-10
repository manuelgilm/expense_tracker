import React, { useState } from "react"
import axios from "axios"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../index.css"
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
      navigate("/dashboard", {state:user});
    }
    const goSingUp = ()=>{
        navigate("/sign-up")
    }

    function onSubmit(e){
        console.log(e)
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
        <div className="container form">
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
            
                <div className="btn-toolbar tpbutton btn-toolbar text-center">
                    <button type="submit" name="logIn" className="btn btn-primary btn-block">Log In</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn