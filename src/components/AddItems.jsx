import React, { useState } from 'react'


export const AddItems = (props) => {

    const [newItem,setNewItem] = useState("");


    function handleChange(event) {
        setNewItem(event.target.value);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        props.addItem(newItem);
        setNewItem("");
    }
    
    return (
        <div className='add-items' >
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange}  type="text" placeholder='Add Item' value={newItem}  autoFocus required />
                <button className='btn btn-primary'><i className="bi bi-plus"></i></button>
            </form>
        </div>
    )
}

export default AddItems;
