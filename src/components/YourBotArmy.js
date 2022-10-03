import React from "react";
import BotCard from "./BotCard"

function YourBotArmy({botArmy,removeBotFromArmy}) {

    
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          
          {botArmy.map(bot =>{
              return <BotCard key={bot.id} bot={bot}  getBot={removeBotFromArmy}/>
          })}
      
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
