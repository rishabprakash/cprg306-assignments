import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const getItems = async (userId) => {
  const items = [];
  const itemsRef = collection(db, "users", userId, "items");

  try {
    const query = await getDocs(itemsRef);
    query.forEach(doc => {
      items.push({id: doc.id,...doc.data()
      });
    });
  } catch (error) {
    console.error("Error in fetching the items:", error);
  }

  return items;
};

export const addItem = async (userId, item) => {
  const itemsRef = collection(db, "users", userId, "items");

  try {
    const query = await addDoc(itemsRef, item);
    return query.id;
  } catch (error) {
    console.error("Error in adding the item:", error);
  }
};
