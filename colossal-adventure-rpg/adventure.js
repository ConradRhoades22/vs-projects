const readline = require("readline-sync")

const player = {
    healthMax: 40,
    currentHealth: 40,
    attackMax: 10,
    attackMin: 0,
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

const combatActions = ["Smack", "Run",]

let selectedEnemy = () => {
    min = 1
    max = enemies.length
    let selected = Math.floor(Math.random() * max)
    return enemies[selected]
}
function random_number(min, max) {
    return Math.floor(Math.random() * 4)
}

let playerInv = []
let alive = true
let name = readline.question("Welcome. A Grand adventure will take place, but first I will need to know your name?")
console.log("Well " + name +  ", today you will embark on a journey that is like many others. Really, its not too special.")


const whatYouDo = () => {
    let walking = readline.keyIn("Press 'w' to start off on the right foot or see what you are carring with you",{limit: 'wp'})
    if (walking === "p") {
        console.log("player health: " + player.currentHealth) 
        console.log("Inventory: " + playerInv)
    }
    //readline.keyIn("You open your My Little Pony fanny pack to see: " + playerInv + "You also feel this much alive: " + player.currentHealth, {limit: 'p'})w
        let randomIndex = random_number()
        switch (randomIndex) {
        case 0:
        console.log("As you were walking and observing the vast and dull emptiness, you stub your toe. Nice")
        break;
        case 1:
        console.log("You find a water fountain, as you take a drink the water fluctuates from boiling hot to ice cold because your cities infrastructure is only held together with ducktape and used gum")
        break;
        case 2:
        console.log("The trees are oddly blue. They hold no 3D values, just blue.")
        break;
        case 3:
        combat()
        break;
        default:
            break;
        }
    }
    let combat = () => {
    let newEnemy = selectedEnemy()
    newEnemy.currentHealth = newEnemy.healthMax
    console.log("The locals seems small but rapidly getting bigger. As you turn around there is a " + newEnemy.name + " standing over you. Good luck")
    inCombat = true
    while (player.currentHealth > 0 && inCombat){
        const combatChoice = readline.keyInSelect(combatActions, "what do you want to do?")
        if (combatActions[combatChoice] === "Smack") {
            let attack = playerHit(newEnemy)
        console.log("Schwack. you hit him for "+ attack +" hit points. Your really giving it to them now.")
        if (newEnemy.currentHealth <= 0) {
            playerInv.push(newEnemy.drops)
            player.currentHealth = player.currentHealth + 2
            inCombat = false
        }
            let enemyAttack = enemyHit(newEnemy)
            console.log(newEnemy.name + " swing and hit you for " + enemyAttack)
            if (player.currentHealth <= 0) {
                console.log("you died")
                alive = false
                inCombat = false
            }
        } else if (combatActions[combatChoice] === "Run"){
        console.log("These guys are crazy, time to run untill you break a light sweat.")
        let escape = Math.floor(Math.random() * 2)
        console.log(escape)
            if (escape === 1) {
                inCombat = false
            } else{
                let enemyAttack = enemyHit(newEnemy)
                console.log("They swing and hit you for " + enemyAttack)
            }
        } else {
            inCombat = false
            alive = false
        }
    }
}

let playerHit = (selectedEnemy) => {
    max = player.attackMax
    let hitAmount =  Math.floor((Math.random() * max) + min)
    selectedEnemy.currentHealth = selectedEnemy.currentHealth - hitAmount
    return hitAmount
}
let enemyHit = (selectedEnemy) => {
    min = selectedEnemy.attackMin
    max = selectedEnemy.attackMax
    let enemyPower = Math.floor((Math.random() * max) + min)
    player.currentHealth = player.currentHealth - enemyPower
    return enemyPower
}
while (alive){
    console.log ("Your blood is still pumping through your veins, you have never felt so dis-satisfyed with your surroundings")
    whatYouDo()
    random_number()
}