"use client";
import React, { useState, useEffect } from "react";
import Item from "./item";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from '../_utils/auth-context';
import { getItems, addItem } from "../_services/shopping-list-servise";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user) {
      console.log("Loading the items (Refresh).")
      loadItems(user.uid);
      console.log("Items Loaded.")
    }
  }, [user]);

  const loadItems = async (userId) => {
    console.log("loading the items from firebase")
    const fetchedItems = await getItems(userId);
    setItems(fetchedItems);
  };

  const handleAddItem = async (item) => {
    if (user) {
      const newItemId = await addItem(user.uid, item);
      console.log("added the item from Page Sucessfull")
      setItems([...items, { id: newItemId, ...item }]);
    }
  };

  const handleItemSelect = (name) => {
    console.log(name);
    name = name.replace(/🥛|🍞|🥚|🍌|🥦|🍗|🍝|🍝|🧻|🍽️|🧼/g, '');
    name = name.split(",")[0];
    setSelectedItemName(name);
  };

  return (
    <main className="min-h-screen p-4 bg-slate-600 text-white">
      {!user ? (
        <div>No Cheating You are not logged in</div>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
}
