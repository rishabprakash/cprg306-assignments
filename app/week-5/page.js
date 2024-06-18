import Item from "./item"
import ItemList from "./item-list";

export default function Page() {
    return (
      <main 
         className="  min-h-screen  p-4   bg-slate-600  text-white  " >
          
          <h1   
          className="   text-5xl   font-bold mb-8">
            Shopping List
            </h1>

        <ItemList/>
      </main>
    )
  };
  