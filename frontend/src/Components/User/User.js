import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const User = (props) => {

  const { _id,name,gmail,age,address } = props.user;

  const history = useNavigate();

  const deleteHandler = async () => {
    await axios.delete(`http://localhost:5000/users/${_id}`)
    .then(res => res.data)
    .then(()=>history('/'))
    .then(()=>history('/userdetails'))
  }

  return (
    <div>
      <h1>User Details</h1>
      <br /> <br />
      <h2>Id: {_id}</h2>
      <h2>Name: {name} </h2>
      <h2>Email: {gmail}</h2>
      <h2>Age: {age}</h2>
      <h2>Address: {address}</h2>
      <Link to={`/userdetails/${_id}`}>
      Update
      </Link>
      <button onClick={deleteHandler}> Delete </button>
    </div>
  )
}

export default User