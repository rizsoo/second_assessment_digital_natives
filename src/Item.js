import React from 'react'
import { useState } from 'react'

const Item = ({key, firstName, lastName, created, status, item, list, setItems}) => {

    const [edit, setEdit] = useState(false)
    const [isActive, setIsActive] = useState(status)

    console.log(item.status);

    // Edit Active
    const editActive = (e) => {
        setItems(list.map((el) => {
        if(el.id === item.id && el.status === "active") {
            setIsActive("locked")
            return {
            ...el, status: "locked" 
            }
        } else if(el.id === item.id && el.status === "locked") {
            setIsActive("active")
            return {
                ...el, status: "active"
            };
        }
        return {
            ...el
        }; 
        }))
    }
    
  return (
    <div className='profile' key={key}>
        <div>
            <h3 className={isActive === "active" ? null : "line-through"}>{firstName} {lastName}</h3>
            <p className={isActive === "active" ? null : "line-through"}>Created at: {created}</p>
        </div>
        <div className={edit? 'editing' : 'editing greyish'}>
            {edit?
                <button className={isActive === "active" ? "active box" : "locked box"} onClick={editActive}>
                    <ion-icon name={status === "active" ? "flash-outline" : "flash-off-outline"}></ion-icon>
                </button> : 
                <button className={isActive === "active" ? "active box" : "locked box"} onClick={editActive} disabled>
                    <ion-icon name={status === "active" ? "flash-outline" : "flash-off-outline"}></ion-icon>
                </button> }
            <button onClick={() => setEdit(!edit)} className="box">
                {edit? 
                    <ion-icon name="checkmark-outline"></ion-icon> :
                    <ion-icon name="settings-outline"></ion-icon>
                }
            </button>
        </div>
    </div>
  )
}

export default Item