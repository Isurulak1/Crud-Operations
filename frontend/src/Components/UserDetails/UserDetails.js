import React, { useEffect, useRef, useState } from 'react'
import Nav from '../Nav/Nav'
import axios from 'axios'
import User from '../User/User'
import { useReactToPrint } from 'react-to-print'

const URL = 'http://localhost:5000/users'

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data)
}

const UserDetails = () => {

  const [users, setUsers] = useState();
  const ComponentsRef = useRef();

  useEffect(()=> {
    fetchHandler().then((data) => setUsers(data.users))
  },[])

  
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: 'User Details',
    onAfterPrint: () => alert('Users Report Successfully Downloaded!')
  })
  console.log(ComponentsRef)

  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers = data.users.filter((user) =>
        Object.values(user).some((field) => 
          field.toString().toLowercase().includes(searchQuery.toLowercase())
        )
      )
      setUsers(filteredUsers);
      setNoResults(filteredUsers.length === 0);
    });
  }


  return (
    <div>
    <Nav/>
    <h1>User Details Display Page</h1>
    <input onChange={(e)=> setSearchQuery(e.target.value)}
    type='text' name='search' placeholder='Search Users Details'></input>
    <button onClick={handleSearch}>Search</button>

    { noResults ? (
      <div>
        <p>No users Found</p>
      </div>
    ) : (

    <div  ref={ComponentsRef}>
      {users && users.map((user, i ) => (
        <div key={i}>
          <User user={user} />
        </div>
      ))}
    </div>
    )}
    <button onClick={handlePrint}>Download Report</button>
    </div>
    
  )
}

export default UserDetails