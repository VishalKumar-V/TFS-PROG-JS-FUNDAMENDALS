
// =============================================================================================================================
/**
 * Values : Number
 */

//recepie details
let recipeRiceInKg = 1
let recipeTomatoInPieces = 2
let recipeOnionInKgs = .5
let recipePudinaInKattu = 3
let recipeKottamalliInKattu = 1
let recipeChickenInKg = 1
let recipePattalavangamIn10RsPack = 1
let recipeWaterInLitre = 1.5

//serving details
let totalBiriyaniInKg = 2
let forTotalPeople = 5

// =============================================================================================================================
/**
 * Values : String P1
 */

const recepieName = "Adengappa Biriyani"

// =============================================================================================================================
/**
* Values : Boolean
*/

let isRiceAvailable = true
let isWaterAvailable = true
let isVegetableAvailable = true


// =============================================================================================================================
/**
* Values : Number : using Operators 
*/

// Arithmetic Operators
// Adding 2 more biriyani for buffer
forTotalPeople = forTotalPeople + 2 // 7

// Unary
//Asking Who else need Biriyani
// Brother’s friend +1
forTotalPeople++ //8


// Neighbour friend +1
forTotalPeople++ //9

// Compound Assignment
// Friends called from room and said 3 more
forTotalPeople += 3 //12

// Final people with Buffer
const finalTotalPeople = forTotalPeople + 3  // buffer //val = 15


//recalculating all recipe quantity for new total number of people

let percentageDiff = finalTotalPeople / (forTotalPeople / 100) // 3


//recepie details
let reqRiceInKg = recipeRiceInKg * percentageDiff // 3
let reqTomatoInPieces = math.ceil(recipeTomatoInPieces * percentageDiff) // 6
let reqOnionInKgs = percentageDiff * recipeOnionInKgs //1.5
let reqPudinaInKattu = percentageDiff * recipePudinaInKattu //9
let reqKottamalliInKattu = percentageDiff * recipeKottamalliInKattu //3
let reqChickenInKg = percentageDiff * recipeChickenInKg //3
let reqPattalavangamIn10RsPack = percentageDiff * recipePattalavangamIn10RsPack //3
let reqWaterInLitre = percentageDiff * recipeWaterInLitre //4.5


// =============================================================================================================================
/**
* Values : Boolean : using Operators
*/

let isRavugalam = currentTime < 10
let isEmagandam = currentTime > 10
let isNallaNeram = isRavugalam == false && isEmagandam == false


// =============================================================================================================================
/**
* Values : Any : using Operators 
*/

//Lets choose dabara size based on quantity
let dabaraSize = finalTotalPeople < 6 ? "Family Size" : "Festival Size"



// =============================================================================================================================
/**
* Scope P1 
*/

// checking Available Rice stock In Drum if not moving from mootai
let availableRiceInDrum = 1
let extraRequiredRiceInKg = availableRiceInDrum < riceInKg ? riceInKg + 1 : 0

{
    let arisiMottaAvailableInKg = 25
    availableRiceInDrum = availableRiceInDrum + extraRequiredRiceInKg
    arisiMottaAvailableInKg = arisiMottaAvailableInKg - extraRequiredRiceInKg
}



// =============================================================================================================================
/**
* Conditional Execution - Value Based 
*/

//lets see arisi name using code a and confirm if it is biriyani arisi

let currentArisiCode = 1011
let arsiName = "Unknown"
let isBiriyaniArsi = true


switch (currentArisiCode) {

    case 1009:
        arsiName = "Ponni"
        isBiriyaniArsi = false
        break;

    case 1017:
        arsiName = "Samba"
        break;

    case 1009:
        arsiName = "Basmathi"
        break;

    default:
        isBiriyaniArsi = false

}


// =============================================================================================================================
/**
* Conditional Execution - Value Based 
*/

// lets adjust water based on arsi type

if (isBiriyaniArsi == true) {

    if (arsiName == "Basmathi") {
        reqWaterInLitre += .2
    }
    else if (arsiName == "Samba") {
        reqWaterInLitre += .5
    }
}
else {
    reqWaterInLitre -= .5
}


/**
* Conditional Execution - Recursive
*/

// Arisiyai Orravaikavum


let riceInGundan = 0



// for
//Adding Rice from drum to Dabara
// i indicates the meter scale
// i != 5 can be used but i<=5 has better coverage relative to steps perspective
// i++ // adding 1 kg in each step
for (let i = 1; i <= 5; i++) {
    riceInGundan = riceInGundan + 1
}



//while
// Adding water to dabara
let waterInGundan = 0
let totalLitersAddedInGundan = 0

while (totalLitersAddedInGundan < waterInLitre) {
    totalLitersAddedInGundan++
    waterInGundan++
}


// =============================================================================================================================
/**
* Array
*/

//Available Plates in the kitchen rack
let plates = ["MetalCircle", "PlasticCircleGreen", "MetalCircle", "PlasticCircle", "PlasticSquareGreen", "PlasticSquareGreen"]

//Length
//lets see how many plates we have
console.log(plates.length)

// indexOf
// kid asks for his own plate
//Where do we have plastic square  green plate if we do where it is 
console.log(plates.indexOf("PlasticSquareGreen"))


// pop
// lets remote the last plate and wash it and keep it back if clean is 100 percent 
let lastPlate = plates.pop()

let clean = 100

// push
// adding back if clean is 100 percent 
if (clean === 100) {
    plates.push(lastPlate)
}

// lets keep the plates in the table in 2 half for grooming purpose 
let plateHalfSetSize = Math.floor(plates.length / 2)
let firstSet = plates.splice(0, plateHalfSetSize)
let secondSet = plates


// lets create a detailed Recipe
//Lets put all available item in one place

let reqRecepieItemBox = {
    "rice": {
        "quantity": reqRiceInKg,
        "metrics": "Kg",
        "arsiName": arsiName,
    },
    "tomato": {
        "quantity": reqTomatoInPieces,
        "metrics": "Pieces"
    },
    "onion": {
        "quantity": reqOnionInKgs,
        "metrics": "Kg"
    },
    "pudina": {
        "quantity": reqPudinaInKattu,
        "metrics": "Kattu"
    },
    "kottamalli": {
        "quantity": reqKottamalliInKattu,
        "metrics": "Kattu"
    },
    "chicken": {
        "quantity": reqChickenInKg,
        "metrics": "Kg"
    },
    "pattalavangam": {
        "quantity": reqPattalavangamIn10RsPack,
        "metrics": "10RsPack"
    },
    "water": {
        "quantity": reqWaterInLitre,
        "metrics": "Litre"
    },
}


//create
//Lets expand the plate specification in detail
//MetalCircle
let defaultPlateColor = "blue"
// let eachPlate = {
// “materialType”: “metal”,
// “plateForm”: “circle”,
// “color”: defaultPlateColor,
// }
let detailedPlateSpecification = []


// =============================================================================================================================
/**
* Conditional Execution - Recursive - Array Variant
*/

for (let a = 0; a < firstSet.length; a++) {
    let plateName = firstSet[a]
    let plateNameWithSpace = plateName.replace(/([A-Z])/g, ' $1')
    let plateNameArr = plateNameWithSpace.split(" ")

    let detailedItem = {
        "materialType": plateNameArr[1],
        "plateForm": plateNameArr[2],
        "color": plateNameArr[3],
    }

    detailedPlateSpecification.push(detailedItem)

}

for (let a = 0; a < secondSet.length; a++) {
    let plateName = secondSet[a]
    let plateNameWithSpace = plateName.replace(/([A-Z])/g, ' $1')
    let plateNameArr = plateNameWithSpace.split(" ")

    let detailedItem = {
        "materialType": plateNameArr[1],
        "plateForm": plateNameArr[2],
        "color": plateNameArr[3],
    }

    detailedPlateSpecification.push(detailedItem)

}



// =============================================================================================================================
/**
* JSON
*/

//Handing over the details to the 2nd person who is gonna proceed further
let allItems = {
    recipeItem: reqRecepieItemBox,
    servingItems: detailedPlateSpecification
}



// =============================================================================================================================
// =============================================================================================================================
// =============================================================================================================================

/**
 * Functions P01
 */
// lets see whats there in kitchen

// class Kitchen {

// this.socket = true
// this.knife = true
// this.exhaustRunning = false

// exhaustSwitch = () => {
//     this.exhaustRunning = !this.exhaustRunning
// }

// }


// class Kitchen {

//     a = 10
//     exhaustRunning = false
//     constructor() {
//         this.socket = true
//         this.knife = true
        
//     }


//     exhaustSwitch = () => {
//         this.exhaustRunning = !this.exhaustRunning
//     }
// }

