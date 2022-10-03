import React from "react";
import BotCard from "./BotCard.js"

function BotCollection({bots, addBot,deleteBot}) {
  
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot,index) =>{
          return <BotCard deleteBot={deleteBot}  getBot={addBot} key={index} bot={bot}/> 

        })}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
