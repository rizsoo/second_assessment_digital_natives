import React from 'react'
import Header from './Components/Header.js'
import { useState, useEffect } from 'react';

const Edit = () => {
  let editThisItem = JSON.parse(localStorage.getItem('editItem')) || [];

  const [inputFirstName, setInputFirstName] = useState(editThisItem[0].first_name);
  const [inputLastName, setInputLastName] = useState(editThisItem[0].last_name);

  const [listOfItems, setListOfItems] = useState([]);

  //GET r.
  useEffect(() => {
    fetch('https://assessment-users-backend.herokuapp.com/users.json')
        .then(response => response.json())
        .then(data => setListOfItems(data));
}, []);

//EDIT First name
  function editFirstName(e) {
    setInputFirstName(e.target.value)
  }

  function editLastName(e) {
    setInputLastName(e.target.value)
  }

  //PUT r.
  function putRequest() {
    const today = new Date().toISOString();
    const id = editThisItem[0].id.toString();
    listOfItems.map((el) => {
      if(el.id === editThisItem[0].id) {
        fetch(`https://assessment-users-backend.herokuapp.com/users/${id}`, {
        method: 'PUT',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify(el) 
      })
      }
    })

  }

  //SUBMIT
  function handleSubmit(event) {
    event.preventDefault();
    setListOfItems(listOfItems.map((el) => {
      const today = new Date().toISOString();
        if(el.id === editThisItem[0].id) {
          return {
            ...el, first_name: inputFirstName, last_name: inputLastName, updated_at: today
          }
        }
        return el;
      }))
      console.log("user updated");
  }

  useEffect(() => {
    putRequest()
  })

  return (
      <div>
        <Header />
        <form className='add-user' onSubmit={handleSubmit}>
          <h3>Edit User</h3>
            <p>Users first name </p>
            <input name="first_name" type="text" defaultValue={inputFirstName} onChange={editFirstName}
              />
            <p>Users last name </p>
            <input name="last_name" type="text"  defaultValue={inputLastName} onChange={editLastName}
              />
            <input type="submit" value="Update" />
        </form>
      </div>
  )
}

export default Edit