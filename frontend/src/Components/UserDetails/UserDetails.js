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

  return (
    <div>
    <Nav/>
    <h1>User Details Display Page</h1>
    <div>
      {users && users.map((user, i ) => (
        <div key={i}>
          <User user={user} />
        </div>
      ))}
    </div>
    <div  ref={ComponentsRef}>
      <h1>Isuru</h1>
    </div>
    <button onClick={handlePrint}>Download Report</button>
    </div>
    
  )
}

export default UserDetails