import React,{ useEffect,useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const[bots,setBots]=useState([])
  const [botArmy,setBotArmy]=useState([])
  
  function fetchBots(){
    fetch("http://localhost:8002/bots")
      .then(response => response.json())
      .then(response => setBots(response))
    
  }

  useEffect(()=>{
      fetchBots()
  },[])
 
  function deleteBot(bot){
      
     
      fetch(`http://localhost:8002/bots/${bot.id}`,{
      method:"DELETE",
      headers: {
				"content-type": "application/json",
			},
      
    })
    .then(() =>{
      const returnedBots = bots.filter(info => info.id !== bot.id)
      setBots(returnedBots)
     })
    
    
    }

    function removeBotFromArmy(bot) {
      const updatedArmy = botArmy.find((robot) => robot.id === bot.id)
      if (updatedArmy) {
        setBotArmy(
          botArmy.filter((robots) => robots.id !== bot.id)
        )
      }
    }
  

    function addBot(bot) {
      const updatedArmy = botArmy.find((robot) => robot.id === bot.id)
      if (!updatedArmy) setBotArmy([...botArmy, bot])
  
    }
  
    
   
  

  return (
    <div>
      <YourBotArmy botArmy={botArmy}  removeBotFromArmy={removeBotFromArmy} />
      <BotCollection bots={bots} addBot={addBot} deleteBot={deleteBot} />
    </div>
  )
}

export default BotsPage;
