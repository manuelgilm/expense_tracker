import React,{useState} from "react"
import axios from "axios"

function SignUp(){
    const [newUser, setNewUser] = useState({
        username:"",
        email:"",
        password:""
    })

    function handleChange(event){
        const {name, value} = event.target

        setNewUser(preValue=>{
            return {
                ...preValue,
                [name]:value
            }
        })
    }
    
    function onSubmit(event){
        event.preventDefault()
        axios.post("http://localhost:5000/users/register", newUser)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div className="container form">
            <form onSubmit={onSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" value={newUser.username} name="username" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={newUser.email} name="email" onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={newUser.password} name="password" onChange={handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="#">sign in?</a>
                    </p>
            </form>
        </div>
    )    
}

export default SignUp