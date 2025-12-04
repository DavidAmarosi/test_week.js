
export function createPlayer(name) {

    let player = {
    "name": name,
    "times": []
}
    return player
}

export function addSolveTime(player, seconds)  {
    player.times.push(seconds)
}

export function showStats(player){
    let sum = 0 
    for (let index = 0; index < player.times.length; index++) {
        sum += player.times[index]

    }
    console.log(`The time for all the puzzles is: ${sum}`);
    console.log(`The average time for each puzzle is:, ${sum/player.times.length}`);
    
    
}

