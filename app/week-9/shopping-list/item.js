import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
    return (
        <li
            className="bg-slate-800 flex cursor-pointer flex-col gap-2 p-2 rounded-lg w-[300px] hover:scale-105 active:scale-95 duration-200 ease-in-out"
            onClick={() => {
                onSelect(name);
            }}
        >
            <span className="text-xl font-semibold">{name}</span>
            <span>
                Buy {quantity} in {category}
            </span>
        </li>
    );
};

export default Item;