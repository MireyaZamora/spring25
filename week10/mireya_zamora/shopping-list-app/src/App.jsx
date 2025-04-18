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
       formDataObj.quantity = parseInt(formDataObj.quantity || 1);
    //repeats - idk something is wrong i stated add radnom code....
       const existingItemIndex = shoppingList.findIndex(item => item.name === formDataObj.name);
       if (existingItemIndex >= 0) {
        const updatedShoppingList = shoppingList.map((item, index) => {
            if (index === existingItemIndex) {
                return {
                    ...item,
                    quantity: item.quantity + 1, 
                    cost: item.cost + formDataObj.cost 
                };
            }
            return item;
        });

    } else {
       setShoppingList([...shoppingList, formDataObj]) }

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
                   {/* create another input that allows people to add costs for an item */}
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
