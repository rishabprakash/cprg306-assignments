"use client";
import React, { useState } from "react";
import Item from "./item";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";


export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (name) => {
    console.log(name);
    name = name.replace(/🥛|🍞|🥚|🍌|🥦|🍗|🍝|🍝|🧻|🍽️|🧼/g, '');
    name = name.split(",")[0];

    setSelectedItemName(name);
  };

  return (
    <main className="min-h-screen p-4 bg-slate-600 text-white">
      <h1 className="text-5xl font-bold mb-8">Shopping List</h1>
      <div className="flex flex-row gap-5 justify-between">
        <div className="mt-4 w-full">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="mt-4 w-full">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
};