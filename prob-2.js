//Question 2:
//Create a function that receives a string containing the name of a fruit and returns its color using a switch case. Handle at least five different fruits and return "Unknown" if the fruit is not recognized.

function fruits (Name) {
    switch (Name) {
        
        case "Apple":
            console.log("Red and green");
            break;
            
        case "Mangoes":
            console.log("Oranagish-Yellow")
            break;
        
        case "Coconut":
            console.log("Brown and green");
            break;
        
        case "Grapes":
            console.log("Green and purple");
            break;
            
        case "Banana":
            console.log("Yellow");
            break;
        
        default:
            console.log("Unknown");
    }
}

fruits("Mangoes")
