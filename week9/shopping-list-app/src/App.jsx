import { useState } from week9\shopping-list-app\node_modules\react
import reactLogo from week9\shopping-list-app\src\assets\react.svg
import viteLogo from week9\shopping-list-app\public\vite.svg
import week9\shopping-list-app\public\vite.svg

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

////export default App

import { useState } from 'react';
import './App.css'
import ShoppingList from './ShoppingList';


function App() {
   const [shoppingList, setShoppingList] = useState([]);
   const [budget] = useState(100);


   const addItem = (event) => {
       event.preventDefault();
       let form = event.target;
       let formData = new FormData(form)
       let formDataObj = Object.fromEntries(formData.entries())
       formDataObj.cost = parseFloat(formDataObj.cost || 0);


       setShoppingList([...shoppingList, formDataObj])
       form.reset();
   }


   const removeItem = (event) => {
       const name = event.target.value;
       setShoppingList(shoppingList.filter(item => item.name !== name));
   };


   return (
       <>
           <h1>Shopping List Manager</h1>
           <div className='card'>
               <form onSubmit={addItem} className='flex-apart'>
                   <input type="text" name="name" placeholder='Add item to list...' />
                   {/* { create another input that allows people to add costs for an item */} */}
                   <button className='btn purple' type='submit'>Add</button>
               </form>
           </div>


           <ShoppingList
               shoppingList={shoppingList}
               removeItem={removeItem}
               budget={budget}
           />
       </>
   );
}


export default App;
