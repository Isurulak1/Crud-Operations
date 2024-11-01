import React from 'react'
import { Link } from 'react-router-dom';

const User = (props) => {

  const { _id,name,gmail,age,address } = props.user;

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
      <button> Delete </button>
    </div>
  )
}

export default User