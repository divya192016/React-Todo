import React from 'react';
import { FaTrashAlt } from "react-icons/fa"


const Content = ({items, handleCheck, handleDelete}) => {
 
 
 

   
  return (
    <main>
      {(items.length) ?(
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input 
              className="checkbox"
              onChange={() => handleCheck(item.id)}
              type="checkbox" 
              checked = {item.checked}
            />
            <label
            onDoubleClick={()=> handleCheck(item.id)}
            >{item.item}</label>
            <FaTrashAlt 
            role="button"
            tabIndex="0"
            onClick={() => handleDelete(item.id)}
            aria-label={`Delete ${item.item}`}
            />
          </li>
        ))}
        
      </ul>
      ) : (
        <p>Your list is Empty</p> )}
    </main>
  )
}

export default Content