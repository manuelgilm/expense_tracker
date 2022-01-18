import React from 'react'
import "./category.css"
import { userContext } from '../../userContext'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Category() {
    const {user, setUserContext} = useContext(userContext)
    const [category, setCategory] = useState({
        categoryName:"",
        description:""
    })
    
    function handleChange(event){
        const {name, value} = event.target
        setCategory(preValue =>{
            return {
                ...preValue,
                [name]:value
            }
        })   
    }
    const navigate = useNavigate();

    const goHome = () => { 
      navigate("/dashboard");
    }
    const goSingUp = ()=>{
        navigate("/sign-up")
    }

    function onSubmit(event){
        console.log(event.form)
        event.preventDefault()
        axios.post("http://localhost:5000/categories/add", category)
        .then(()=>goHome())
        .catch(()=>goSingUp())
    }

    return (
        <div className='category'>
            <form onSubmit={onSubmit}>

                <h3>Register Category</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Category Name" value= {category.categoryName} name="categoryName" onChange={handleChange}></input>

                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" placeholder="Category Description" value={category.description} name="description" onChange={handleChange} />
                </div>

                <div className="btn-toolbar tpbutton btn-toolbar text-center">
                    <button type="submit" name="addCategory" className="btn btn-primary btn-block">Add</button>
                </div>
                </form>
        </div>
    )
}
