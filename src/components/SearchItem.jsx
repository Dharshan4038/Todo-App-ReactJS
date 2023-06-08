import React from 'react'

export const SearchItem = ({search,setSearch}) => {
    
    
    return (
        <div className='search-items'>
            <form onSubmit={(event)=> event.preventDefault()}>
                <input type="text" placeholder='Search Item...' role='searchbox' value={search} onChange={(event)=>setSearch(event.target.value)} />
            </form>
        </div>
    )
}

export default SearchItem;