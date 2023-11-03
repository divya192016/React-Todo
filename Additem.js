import React from 'react'
import { FaPlus } from 'react-icons/fa'



const Additem = ({newItem,setNewItem,handleSubmit}) => {
 
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <input
            
            type='text'
            autoFocus
            id='addItem'
            placeholder='Add Item'
            required
            aria-label='Add Item'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button 
        type='submit'
        aria-label = "Add Item"
        >
        <FaPlus />
        </button>
    </form>
  )
}

export default Additem