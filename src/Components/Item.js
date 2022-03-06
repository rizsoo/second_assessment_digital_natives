import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Item = ({ firstName, lastName, created, status, list, setItems, item, edit, setEdit, isEdit, setIsEdit}) => {
    
    function putRequest() {
        const today = new Date().toISOString();

        const id = item.id.toString();
      
        fetch(`https://assessment-users-backend.herokuapp.com/users/${id}`, {
            method: 'PUT',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(item) })
                // .then(response => this.setItems({ updated_at: today }))
        
    }
    function editStatus() {
        setItems(list.map((el) => {
            if(el.id === item.id && el.status === "active") {
                return {
                ...el, status: "locked" 
                }
            } else if(el.id === item.id && el.status === "locked") {
                return {
                    ...el, status: "active",
                };
            }        
            return {
                ...el
            }; 
            }))
    }

    useEffect(() => {
        putRequest()
    })

// Handle sent to edit
    function sendToEdit() {
        setIsEdit([])
        list.map((el) => {
            if(el.id === item.id) {
                isEdit.push(el)
            } 
            return null
        })

// Save to local what we want to edit
if (localStorage.getItem("editItem") === null) {
    localStorage.setItem("editItem", JSON.stringify([]));
} else {
    localStorage.setItem("editItem", JSON.stringify(isEdit));
}
}
    
return (
    <div className='profile' key={item.id}>
        <div>
            <h3 className={status === "active" ? null : "line-through"}>{firstName} {lastName}</h3>
            <p className={status === "active" ? null : "line-through"}>Created at: {created}</p>
        </div>
        <div className='editing'>
            <div className={edit? '' : 'greyish'}>
                {edit?
                    <button className={status === "active" ? "active box" : "locked box"} onClick={editStatus}>
                        <ion-icon name={status === "active" ? "lock-open-outline" : "lock-closed-outline"}></ion-icon>
                    </button> : 
                    <button className={status === "active" ? "active box" : "locked box"} onClick={editStatus} disabled>
                        <ion-icon name={status === "active" ? "lock-open-outline" : "lock-closed-outline"}></ion-icon>
                    </button> }
            </div>
        <Link to='/edit' ><button onClick={sendToEdit} className="box" ><ion-icon name="settings-outline"></ion-icon></button></Link>
        </div>
    </div>
  )
}

export default Item