import React from 'react';
import apiRequest from '../apiRequest';

export const Content = ({items,setItems,setFetchError}) => {

    async function handleChange(id) {
        const listItems = items.map((item)=>{
            return item.id===id ? {...item,checked: !item.checked} : item;
        })
        setItems(listItems);
        const myItem = listItems.filter((item)=>{
            return item.id===id;
        })
        const updateOption = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({checked:myItem[0].checked})
        }
        const reqUrl = "http://localhost:3500/items/"+id;
        const result = await apiRequest(reqUrl,updateOption);
        if(result) setFetchError(result);
    }

    async function handleClick(id) {
        const listItems = items.filter((item)=>{
            return item.id !== id ;
        })
        setItems(listItems);

        const deleteOption = {
            method: "DELETE"
        };

        const reqUrl = "http://localhost:3500/items/"+id;
        const result = await apiRequest(reqUrl,deleteOption);
        if(result) setFetchError(result);
    }
    
    return (
        <div className='items'>
            <div>
                {items.length ? ( 
                    <ul style={{textAlign: "center"}}>
                        {items.map((item)=>{
                            return(
                                <li key={item.id}>
                                    <input type="checkbox" onChange={()=>handleChange(item.id)} checked={item.checked} />
                                    <label style={ (item.checked) ? {textDecoration: "line-through"}:null}  onDoubleClick={()=>handleChange(item.id)} >{item.item}</label>
                                    <button onClick={() => handleClick(item.id)}><i className="bi bi-trash-fill"></i></button>
                                </li> 
                            )
                        })}
                    </ul>
                ):
                (
                    <ul style={{textAlign: "center"}} >
                        <li>Your List is Empty</li>
                    </ul>                    
                )}
            </div>    
        </div>
    )
}

export default Content;
