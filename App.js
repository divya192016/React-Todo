import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Additem from "./Additem";
import { useState } from "react";



function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo-list")));
 
  
 const handleCheck = (id) => {
  const listItems = items.map((item) => 
  item.id === id ? {...item, checked:!item.checked} : item)
  setItems(listItems)
  localStorage.setItem("todo-list", JSON.stringify(listItems))
  
 }
 const handleDelete = (id) => {
  const listItems = items.filter((item) => 
  item.id !== id)
  setItems(listItems)
  localStorage.setItem("todo-list", JSON.stringify(listItems))
  
 }
  const [newItem,setNewItem] = useState('')
  const addItem = (item) =>{
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const addNewItem = {id, checked:false, item}
    const listItems = [...items, addNewItem]
    setItems(listItems)
    localStorage.setItem("todo-list", JSON.stringify(listItems))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
   }
  
 
  return (
    <div className="App">
      <Header />
      <Additem 
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      />
      <Content 
       items = {items}
       handleCheck = {handleCheck}
       handleDelete = {handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
