

import ItemList from './ItemList'

const Content=({items,setItems,handleCkeck,handleDelete})=>{


    return (
        <main>
            {items.length? (
                <ItemList 
                items={items}
                handleCheck={handleCkeck}
                handleDelete={handleDelete}></ItemList>
            ):(
                <p style={{marginTop:'2rem'}}>Your List is empty!</p>
            )}
        </main>
    )
}

export default Content;