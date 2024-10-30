import React from 'react'

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
      <button> Update </button>
      <button> Delete </button>
    </div>
  )
}

export default User