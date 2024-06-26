"use client";

import React, { useState } from "react";

import Item from "./item";
import items from "./items.json";
const
 ItemList  =  () => 
  {  
  
  const
   [sortBy,  setSortBy] 
   =
      
      useState("name");

        const
         thesortedItem = [...items].sort((a, b) => {
    
          if
            (sortBy   ===  "name" )
            {
              return a.name.localeCompare(b.name);
    }   else   
    if
     (sortBy === "category")
      
        {
        return a.category.localeCompare(b.category);
    
      }
      return 0
      ;
  } 
) 
;

    return (
          <div>
      
      <div 
      
      className  =
      "  mb-7">

         <button
            onClick=
            {() => setSortBy("name")

            }
           style
           =
           {
            {      backgroundColor: 
               sortBy === "name" ? "black" : "blue",
               
               marginRight:
                "17px" }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          style={{ backgroundColor: sortBy === "category" ? "black" : "blue" }}
        >
          Sort by Category
        
        
        </button>
     
      </div>

     
     
     
      <ul 
      className="flex 
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      flex-col         gap-5">
      
      
        {thesortedItem.map(item => (
            <Item
               key={item.id}
                  name={item.name}
                quantity={item.quantity}
            
                category={item.category}
          />
        
        )
      )
        }
          </ul>
     </div>
  

)
;
}
;



export default ItemList;
