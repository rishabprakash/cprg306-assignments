import { list } from "postcss";
import React from "react";

const Item = ({name , quantity, category}) =>{
return(
        <li className=" bg-slate-800 flex flex-col gap-2 p-2 rounded-lg w-[300px] hover:scale-105 active:scale-95 duration-200 ease-in-out">
            <span className=" text-xl font-semibold"> {name} </span>
            <span> Buy {quantity} in {category}  </span>
        </li>
)

};
export default Item;