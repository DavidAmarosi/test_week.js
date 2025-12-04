import input from "analiza-sync"; 
import allriddles from "../riddles/allriddles.js";
import {createPlayer,addSolveTime,showStats} from "../utils/function_helper.js";
import {askRiddle,measureSolveTime} from "../utils/function_riddle.js"
import { time } from "node:console";
console.log("Welcome to the puzzle game, you will immediately receive puzzles and answer them");
const name = input("Please write your name:   ")
let obj = createPlayer(name)
for (let index = 0; index < allriddles.length; index++) {
    let timeOfRiddles = measureSolveTime(() => askRiddle(allriddles[index]))
    addSolveTime(obj,timeOfRiddles)
    console.log(showStats(obj));
     
}
