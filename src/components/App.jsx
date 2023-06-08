import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import AddItems from './AddItems';
import SearchItem from './SearchItem';

export const App = () => {

    const [items,setItems] = useState(JSON.parse(localStorage.getItem("todo_list")));
    const [search,setSearch] = useState("");

    function addItem(newItem) {
        const id = items.length ? items[items.length-1].id + 1 : 1;
        const listItems = [...items,{id:id,checked:false,item:newItem}]
        setItems(listItems)
        localStorage.setItem("todo_list",JSON.stringify(listItems));
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
            <Content 
                items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
                setItems={setItems}
            />
            <Footer />
        </div>
    )
}

export default App;
