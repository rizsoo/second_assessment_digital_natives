import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({key, firstName, lastName, created, status, item, list, setItems, edit, setEdit, isEdit, setIsEdit}) => {

    // Edit Active
    function editActive() {
        setItems(list.map((el) => {
        if(el.id === item.id && el.status === "active") {
            return {
            ...el, status: "locked" 
            }
        } else if(el.id === item.id && el.status === "locked") {
            return {
                ...el, status: "active"
            };
        }
        return {
            ...el
        }; 
        }))
    }

    //handle sent to edit
    function sendToEdit() {
        setIsEdit([])
        list.map((el) => {
            if(el.id === item.id) {
                console.log(el);
                isEdit.push(el)
            } 
            return null
        })
        console.log(isEdit);
        //Save to local what we want to edit
        if (localStorage.getItem("editItem") === null) {
            localStorage.setItem("editItem", JSON.stringify([]));
          } else {
            localStorage.setItem("editItem", JSON.stringify(isEdit));
          }
    }
    
  return (
    <div className='profile' key={key}>
        <div>
            <h3 className={status === "active" ? null : "line-through"}>{firstName} {lastName}</h3>
            <p className={status === "active" ? null : "line-through"}>Created at: {created}</p>
        </div>
        <div className='editing'>
            <div className={edit? '' : 'greyish'}>
                {edit?
                    <button className={status === "active" ? "active box" : "locked box"} onClick={editActive}>
                        <ion-icon name={status === "active" ? "lock-open-outline" : "lock-closed-outline"}></ion-icon>
                    </button> : 
                    <button className={status === "active" ? "active box" : "locked box"} onClick={editActive} disabled>
                        <ion-icon name={status === "active" ? "lock-open-outline" : "lock-closed-outline"}></ion-icon>
                    </button> }
            </div>
        <Link to='/edit' ><button onClick={sendToEdit} className="box" ><ion-icon name="settings-outline"></ion-icon></button></Link>
        </div>
    </div>
  )
}

export default Item