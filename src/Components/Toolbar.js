import React from 'react'
import { Link } from 'react-router-dom'
import './Toolbar.css'

const Toolbar = ({getData, edit, setEdit, handleUpdate}) => {
  return (
    <div className='editor-toolbar'>
      <Link to="/new"><button>Add new</button></Link>
      <button onClick={getData}>Reset data</button>
      <button onClick={() => setEdit(!edit)} className={edit? "btn-edit" : ""}>Edit status</button>
      <button onClick={handleUpdate} className='btn-update'>Update</button>
    </div>
  )
}

export default Toolbar