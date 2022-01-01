import React, { useState } from "react"
import "../index.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function SignIn(){
    const [user, setUser] = useState({
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

    function onSubmit(e){
        e.preventDefault()
        console.log(user)
    }

    return (
        <form onSubmit={onSubmit}>

            <h3>Sign In</h3>

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