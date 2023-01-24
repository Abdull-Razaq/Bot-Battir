import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({army,handleRemove, releaseFromArmy}) {
  

  return (
    <div>
     
        {army.map((bot,key) => (
        <BotCard key={key} collection={false} bot={bot} handleAdd={handleRemove} releaseFromArmy={releaseFromArmy}/>
        ))}
      
    </div>
  );
}

export default YourBotArmy;