//C:\Users\rpsd7\OneDrive\Desktop\semester_3\web_development_2\cprg306-assignments\app\week-9\shopping-list\item-list.js
import React, { useState } from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  return (
    <div>
      <div className="mb-7">
        <button
          onClick={() => setSortBy("name")}
          style={{
            backgroundColor: sortBy === "name" ? "black" : "blue",
            marginRight: "17px"
          }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          style={{
            backgroundColor: sortBy === "category" ? "black" : "blue"
          }}
        >
          Sort by Category
        </button>
      </div>

      <ul className="flex flex-col gap-5">
        {sortBy === "name" &&
          items
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item, index) => (
              <Item
                key={index}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={onItemSelect}
              />
            ))}
        {sortBy === "category" &&
          items
            .sort((a, b) => a.category.localeCompare(b.category))
            .map((item, index) => (
              <Item
                key={index}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item)}
              />
            ))}
      </ul>
    </div>
  );
};

export default ItemList;
