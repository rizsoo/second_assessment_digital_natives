import React from 'react'
import AddUserComponent from './Components/AddNewUser.js'
import Header from './Components/Header.js'
import { useState } from 'react'


const New = () => {
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");

// Date
  const today = new Date().toISOString();

// Create new item
  let newItem = {
      'first_name': inputFirstName,
      'last_name': inputLastName,
      'status': "active",
      'created_at': today
  };
  
// POST REQUIEST
  if(inputFirstName != "" || inputLastName != "") {
    fetch('https://assessment-users-backend.herokuapp.com/users', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem)
    }).then(() => {
      console.log('new user added');
    })
  }
  
  return (
    <div>
      <Header />
      <AddUserComponent 
          inputFirstName={inputFirstName}
          setInputFirstName={setInputFirstName}

          inputLastName={inputLastName}
          setInputLastName={setInputLastName}
      />
    </div>
  )
}

export default New