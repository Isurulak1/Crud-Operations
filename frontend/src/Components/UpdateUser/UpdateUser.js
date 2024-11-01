import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'


const UpdateUser = () => {

    const [inputs , setInputs] = useState({})
    const history = useNavigate();
    const id = useParams().id;

    useEffect(()=>{
        const fetchHandler = async () => {
            await axios
            .get(`http://localhost:5000/users/${id}`)
            .then((res)=> res.data)
            .then((data)=> setInputs(data.user));
        };
        fetchHandler();
    },[id]);

    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/users/${id}`,{
            name: String(inputs.name),
            gmail: String(inputs.gmail),
            age: String(inputs.age),
            address: String(inputs.address)
        }).then(res => res.data);
    }

    const handleChange = (e) => {
        setInputs((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(()=>history('/userdetails'));
    }

  return (
    <div>
        <h1>Update User</h1>
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

export default UpdateUser