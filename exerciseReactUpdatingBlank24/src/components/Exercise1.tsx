import { useState } from "react";

//We need a button when the user clicks a button it will update hte name: 'Zac' to name: 'Patrick'

const Exercise1 = () => {
    const [game, setGame] = useState({
        id:1,
        player: {
            name: "David",
        },
    });

    const handleClick = () => {
        // game.player.name = 'Aaron';
        setGame({...game, player:{...game.player,name:"Aaron"}})
       
    }
  return (
    <>
      
      <span>{game.player.name}</span>
      <br/>
      <button onClick={handleClick} className="addButton"   >
              Change Name
            </button>



    </>
  )
}

export default Exercise1
