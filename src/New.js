import React from 'react'
import AddUserComponent from './Components/AddNewUser.js'
import Header from './Components/Header.js'
import App from './App.js'
import { useState, useEffect } from 'react'


const New = () => {
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");

  // Date
  const today = new Date().toISOString();

  let oldItems = JSON.parse(localStorage.getItem('items')) || [];

  let newItem = {
      'first_name': inputFirstName,
      'last_name': inputLastName,
      'status': "active",
      'created_at': today
  };
  
  if(inputFirstName != "" || inputLastName != "") {
    oldItems.push(newItem);
    localStorage.setItem('items', JSON.stringify(oldItems));
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