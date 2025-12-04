import input from "analiza-sync"; 
import { log } from "node:console";

export function askRiddle(riddleObj){
    let statu = true
    console.log(riddleObj.name);
    console.log(riddleObj.taskDescription);
    if ("choices" in riddleObj){
        console.log(`This is an American question and these are the options, [${riddleObj.choices}] please choose which answer is possible.`);
    }
    const Answer_to_the_riddle = input("Please tell me what the answer to this riddle is:  ")
    while (statu == true)
    {if (Answer_to_the_riddle == riddleObj.correctAnswer){
            statu = false
            console.log("Correct answer!!!");
                
    } 
    else {
            console.log("Incorrect answer, please try again.");
            
    }
    
}}
export function measureSolveTime(fn) {

    const now1 = new Date().getTime()
    fn()
    const now2 = new Date().getTime()
    const timeRiddle = (now2 - now1) / 1000
    return timeRiddle

}

