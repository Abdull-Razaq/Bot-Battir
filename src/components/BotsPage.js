import React,{useState,useEffect} from "react";
import MyBotArmy from "./MyBotArmy";
import BotCollection from "./BotCollection";
import "../App.css";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  function addToArmy(bot) {
    //add to army if not already in army
    if(!army.includes(bot)) {
      setArmy([...army,bot]);
    }
  }
  //remove from army
  function removeFromArmy(bot){
    setArmy(army.filter(b => b !== bot));
  }
  function releaseFromArmy(bot){
    //remove from army
    fetch(`http://localhost:3000/bots/${bot.id}`,{
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => {

    setArmy(army.filter(b => b !== bot));
    setBots(bots.filter(b => b !== bot));
    })
  }
  const fetchBots = () => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  };

  useEffect(() => {
    fetchBots();
  }, []);



  return (
    <div>
      <div>
      <h3 id="head">Your bot army</h3>
      <p>Click on a bot to add it to your army:</p>
      <MyBotArmy army={army} handleRemove={removeFromArmy} releaseFromArmy={releaseFromArmy}/>
      </div>
      <BotCollection handleAdd={addToArmy} bots={bots} releaseFromArmy={releaseFromArmy}/>
    </div>
  )
}

export default BotsPage;