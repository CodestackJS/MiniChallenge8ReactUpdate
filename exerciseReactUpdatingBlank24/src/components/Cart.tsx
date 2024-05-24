import { useState } from 'react'

//Update the cart object items of id 1 to show a  quanity 2 with  a button click
const Cart = () => {

    const [cart, setCart] = useState({
       discount: .1,
       items: [
        {id: 1, title: 'Product 1', quantity: 1},
        {id: 2, title: 'Product 2', quantity: 1}
       ] 
    })

    const handleClick =() => {
      // setPizza({...pizza,toppings:[...pizza.toppings,'Cheese']})

      setCart({...cart,items:cart.items.map(items => items.id == 1 ? {...items,quantity: items.quantity +1} : items )})

    }
  return (
    <>
      {/* Title, show items, button to handle the update Update Cart  */}
      <span>{cart.items[0].title}: quantity: </span>
      <span>{cart.items[0].quantity}</span>
      <br/>
      <button onClick={handleClick} className="addButton">Add Quantity</button>


      
    </>
  )
}

export default Cart
