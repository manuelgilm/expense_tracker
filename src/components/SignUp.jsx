import React,{useState} from "react"

function SignUp(){
    const [newUser, setNewUser] = useState({
        firstName:"",
        lastName:"",
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
        console.log(newUser)
    }

    return (
        <form onSubmit={onSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" value={newUser.firstName} name="firstName" onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" value={newUser.lastName} name="lastName" onChange={handleChange}/>
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
    )    
}

export default SignUp