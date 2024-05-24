import React, { useState } from 'react'


//Here you want a button so when the user clicks the button it adds 'Cheese' to the toppoings
const UpdatePizza = () => {

    const [pizza, setPizza] = useState({
        name: 'King Aurthor Supreme',
        toppings: ['Mushroom,','Onions,']
    });

    const handleClick = () => {
        //pizza.toppings.push('Cheese');
        // setGame({...game, player:{...game.player,name:"Aaron"}})
       setPizza({...pizza,toppings:[...pizza.toppings,'Cheese']})

        
    }
  return (
    <>
    <div> 
    <span>{pizza.toppings}</span>
    <br/>
    <button onClick={handleClick} className="addButton">Add Cheese</button>


    </div>
    
   



    </>
  )
}

export default UpdatePizza
