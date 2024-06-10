// /app/week-4/new-item.js

"use client";
import { useState } from 'react';

const NewItem = ()=> {
  const [name,setName] = useState('');

  const [quantity,  setQuantity] =  useState(1)  ;
  const  [ category ,  setCategory ] =  useState('Produce' );

  const  handleSubmit  =  (event)  =>  {
      event.preventDefault () ;
    const  item  =  {  name,  quantity,  category };


    alert
    (`Item:  ${name},  Quantity:  ${quantity},  Category:  ${category}` ) ;
    console.log(item) ;
    setName (' ') ;
    setQuantity (1 ) ; 
    setCategory( 'Produce' ) ;
  };


  return (
    <form onSubmit={handleSubmit}
     className="bg-black p-9 rounded-sm shadow-sm max-w-l mx-auto">
      <div className="mb-2">
        <label   htmlFor="name"  className="block  text-sm font-medium text-white">Item name</label>
       
       
        <input
          type= "text"
          id= "name" 
          value= {name}
          onChange= {(e) => setName(e.target.value ) }
          required

          className=" block w-full  p-4 border  border- rounded-black  md mt-1 shadow-sm  focus:border-blue-400"
        />
      </div>
      <div  className="mb-2" >
        <label htmlFor="quantity"  className= " block text-sm font-m edium  text-white" > Quantity </label>
        <input
           type= " number "
           id=" quantity "
          value={quantity}
          min = "1"
           max = "99"
           onChange={(e) =>  setQuantity (Number(e.target.value) ) } 
         
           required
           className=" block   w-full  p-4  border  border- rounded-black  md  mt- 1 shadow-sm  focus:border-blue-400"
         />
       </div>
       <div className="mb-2">
         <label htmlFor="category" className="block text-sm font-medium text-white">Category</label>
        <select
           id="category"
            value={category}
           onChange={(e) => setCategory(e.target.value)}
          className=" block w-full p-4 border border- rounded-black md mt-1 shadow-sm  focus:border-blue-400"
        >
          <option value=" produce ">  Produce </option>
          <option value=" dairy" > Dairy </option>
          < option value=" bakery" > Bakery </option>
           <option value=" meat" > Meat </option>
           <option value=" frozen" > Frozen Foods </option>
          <option value=" canned"  > Canned Goods </option>
           <option value=" dry" > Dry Goods </option>
           <option value=" beverages" >  Beverages </option>
           <option value=" snacks" > Snacks </option>
          <option value=" household" > Household </option>
          <option value=" other " >  Other </option>
          </select>
      </div>
       <div className=" mb-2 ">
        <button type=" submit " 
        className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add Item</button>
      </div>
     </form>
  );
};

export default NewItem;
