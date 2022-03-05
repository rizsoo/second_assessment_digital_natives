import React from 'react'
import Header from './Components/Header.js'
import { useState, useEffect } from 'react';

const Edit = () => {

  let editThisItem = JSON.parse(localStorage.getItem('editItem')) || [];

  const [inputFirstName, setInputFirstName] = useState(editThisItem[0].first_name);
  const [inputLastName, setInputLastName] = useState(editThisItem[0].last_name);
  
// Date
  const today = new Date().toISOString();
  
  let oldItems = JSON.parse(localStorage.getItem('items')) || [];
  const [listOfItems, setListOfItems] = useState(oldItems);



//EDIT First name
  function editFirstName(e) {
    setInputFirstName(e.target.value)
  }

  function editLastName(e) {
    setInputLastName(e.target.value)
  }

//SUBMIT
  function handleSubmit(event) {
    event.preventDefault();
    setListOfItems(oldItems.map((el) => {
      const today = new Date().toISOString();
        if(el.id === editThisItem[0].id) {
          return {
            ...el, first_name: inputFirstName, last_name: inputLastName, updated_at: today
          }
        }
        return el;
      }))
  }

  useEffect(() => {
    saveIntoLocal();
  }, [listOfItems]);
  
  function saveIntoLocal() {
    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", JSON.stringify([]));
    } else {
      localStorage.setItem("items", JSON.stringify(listOfItems));
  }};

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
            <input type="submit" value="Submit" />
        </form>
      </div>
  )
}

export default Edit