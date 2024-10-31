import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const AddUser = () => {

    const history = useNavigate();
    const [inputs , setInputs] = useState({
        name: "",
        gmail: "",
        age: "",
        address: "",
    })

    const handleChange = (e) => {
        setInputs((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(()=>history('UserDetails'));
    }
    
    const sendRequest = async () => {
        await axios.post('http://localhost:5000/users',{
            name: String(inputs.name),
            gmail: String(inputs.gmail),
            age: String(inputs.age),
            address: String(inputs.address)
        }).then(res => res.data);
    }
    
  return (
    <div>
        <Nav/>
        <h1>Add User Page</h1>
        <form onSubmit={handleSubmit}>
            <label>Enter your name</label>
            <br/>
            <input type="text" placeholder="Name" name="name" onChange={handleChange} value={inputs.name} required/>
            <br/><br/><br/><br/>
            <label>Enter your Email</label>
            <br/>
            <input type="text" placeholder="Email" name="gmail" onChange={handleChange} value={inputs.gmail} required/>
            <br/><br/><br/><br/>
            <label>Enter your Age</label>
            <br/>
            <input type="text" placeholder="Age" name="age" onChange={handleChange} value={inputs.age} required/>
            <br/><br/><br/><br/>
            <label>Enter your Address</label>
            <br/>
            <input type="text" placeholder="Address" name="address" onChange={handleChange} value={inputs.address} required/>
            <br/><br/><br/><br/>
            <button> Submit </button>
        </form>
    </div>
  )
}

export default AddUser