const readline = require("readline-sync")

const player = {
    healthMax: 40,
    currentHealth: 40,
    attackMax: 10
}

const enemies = [
    {
        name: "Scrongle",
        drops: "Dill Sack",
        healthMax: 1,
        currentHealth: 1,
        attackMax: 5,
        attackMin :0
    },
    {
        name: "Pungle",
        drops: "Lightly Used Mcdonalds napkin",
        healthMax: 4,
        currentHealth: 4,
        attackMax: 3,
        attackMin :0
    },
    {
        name: "Skim Beeble",
        drops: "Sopping wet socks that smells of sulfer",
        healthMax: 10,
        currentHealth: 10,
        attackMax: 8,
        attackMin :0
    }
]
let selectedEnemy = () => {
    min = 1
    max = enemies.length

    let selectedEnemy = Math.floor(Math.random() * max)
    return enemies[selectedEnemy]
}
let random_number;
let playerInv = []
let alive = true
let name = readline.question("Welcome. A Grand adventure will take place, but first I will need to know your name?")
console.log("Well " + name +  ", today you will embark on a journey that is like many others. Really, its not too special.")
const whatYouDo = () => {
readline.keyIn("Press 'w' to start off on the right foot or see what you are carring with you",{limit: 'w'})
readline.keyIn("You open your My Little Pony fanny pack to see " + playerInv + "You also feel this much alive: " + player.currentHealth, {limit: 'p'})

    random_number = Math.floor(Math.random() * 4);

    switch (random_number) {
        case 0:
            console.log("As you were walking and observing the vast and dull emptiness, you stub your toe. Nice")
            break;
        case 1:
            console.log("You find a water fountain, as you take a drink the water fluctuates from boiling hot to ice cold because you cities infrastructure is only held together with ducktape and used gum")
            break;
        case 2:
            console.log("The trees are oddly blue. They hold no 3D values, just blue.")
            break;
        case 3:
            console.log("The locals seems small but rapidly getting bigger. As you turn around there is a " + (inCombat = true) + " standing over you. Good luck")
            break;
        default:
            break;
    }
}

while (alive){
    console.log ("Your blood is still pumping through your veins, you have never felt so dis-satisfyed with your surroundings")
    whatYouDo()
    combat()
}
const combatActions = ["Smack", "Run",]

let combat = (selectedEnemy) => {
    selectedEnemy.currentHealth =playerHit(selectedEnemy, player)
    while (inCombat){
        const combatChoice = readline.keyInSelect(combatActions, "what do you want to do?")
        if (combatChoice[combatChoice] === "Smack") {
            console.log("Schwack. you hit him for "+ hitAmount +"hit points. Your really giving it to them now.")
            inCombat = smack(selectedEnemy)
        } else if (combatActions[combatChoice] === "Run"){
            console.log("These guys are crazy, time to run untill you break a light sweat.")
            inCombat = run(selectedEnemy)
        } else {

        }
    }
}
let smack = (selectedEnemy) => {
    if (selectedEnemy.currentHealth > 0) {
        console.log("You won, there will be rumors that start to spread across this land about someone who isnt a huge pushover.")
        playerInv.push(selectedEnemy.drops)
        return false
    } else if (player.currentHealth <= 0) {
        console.log("Wow i didnt think this would happen.")
        inCombat = false
        alive = false
    }
}
let playerHit = (selectedEnemy, player) => {
    max = player.attackMax
    let hitAmount =  math.floor((math.random() * max) + min)
    console.log("you hit them for "+hitAmount+". nice")
    selectedEnemy.currentHealth = selectedEnemy.currentHealth - hitAmount
}
let enemyHit = (selectedEnemy, player) => {
    min = selectedEnemy.attackMin
    max = selectedEnemy.attackMax
    let enemyPower = Math.floor((Math.random() * max) + min)
    player.currentHealth = player.currentHealth - enemyPower
}