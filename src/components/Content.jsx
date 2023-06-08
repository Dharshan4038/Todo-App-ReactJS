import React from 'react';


export const Content = ({items,setItems}) => {

    function handleChange(id) {
        const listItems = items.map((item)=>{
            return item.id===id ? {...item,checked: !item.checked} : item;
        })
        setItems(listItems);
        localStorage.setItem("todo_list",JSON.stringify(listItems));
    }

    function handleClick(id) {
        const listItems = items.filter((item)=>{
            return item.id !== id ;
        })
        setItems(listItems);
        localStorage.setItem("todo_list",JSON.stringify(listItems));
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
