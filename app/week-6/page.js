"use client";
import Item from "./item"
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import { useState } from "react";
export default function Page() {
  const [items,setitems] = useState(itemsData);
  const handleAddItem = (item) => {
    setitems([...items,item])
    items.map((item)=>
    {
      console.log(item);
    })
  }
    return (
      <main 
         className="  min-h-screen  p-4   bg-slate-600  text-white  " >
          
          <h1   
          className="   text-5xl   font-bold mb-8">
            Shopping List
            </h1>
        <NewItem onAddItem={handleAddItem}/>
        <div className=" mt-4">
          <ItemList items={items}/>
        </div>
      </main>
    )
  };
  