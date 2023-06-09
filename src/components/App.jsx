import React, { useState,useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import AddItems from './AddItems';
import SearchItem from './SearchItem';
import apiRequest from '../apiRequest';

export const App = () => {
    const API_URL = "http://localhost:3500/items";
    const [items,setItems] = useState([]);
    const [search,setSearch] = useState("");
    const [fetchError,setFetchError] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=> {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if(!response.ok) throw Error("Data Not received !");
                const listItems = await response.json();
                setItems(listItems);
                setFetchError(null);
            } catch(err) {
                setFetchError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        setTimeout(()=>{
            (async () => await fetchItems())();
        },2000);
    }, [])
 
    async function addItem(newItem) {
        const id = items.length ? items[items.length-1].id + 1 : 1;
        const addNewItem = {id:id,checked:false,item:newItem};
        const listItems = [...items,addNewItem];
        setItems(listItems)
        const postOption = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addNewItem)
        }
        const result = await apiRequest(API_URL,postOption);
        if(result) setFetchError(result);
    }
    
    return (
        <div>
            <Header />
            <AddItems
                addItem = {addItem}
            />
            <SearchItem 
                search={search}
                setSearch = {setSearch}
            />
            <main>
                {isLoading && <p style={{textAlign: "center"}}>Loading items...</p> }
                {fetchError && <p style={{textAlign: "center"}}>{`Error: ${fetchError}`}</p>}
                { !isLoading && !fetchError && <Content 
                    items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
                    setItems={setItems}
                    setFetchError={setFetchError}
                />}
            </main>
            <Footer />
        </div>
    )
}

export default App;
