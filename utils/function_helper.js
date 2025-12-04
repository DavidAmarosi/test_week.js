import input from "analiza-sync"; 
import r1 from "../riddles/r1.js";
import r2 from "../riddles/r2.js";
import r3 from "../riddles/r.js";
import r4 from "../riddles/r4.js";
import { log } from "console";


function  createPlayer(name) {

    let player = {
    "name": name,
    "times": []
}
    return player
}

function addSolveTime(player, seconds)  {
    seconds = performance.now()
    player.times.push(seconds)
}

function showStats(player){
    let sum = 0 
    for (let index = 0; index < times.length; index++) {
        sum += times[index]
        
    }
    console.log(`The time for all the puzzles is: ${sum}`);
    console.log(`The average time for each puzzle is:, ${sum/times.length}`);
    
    
}

