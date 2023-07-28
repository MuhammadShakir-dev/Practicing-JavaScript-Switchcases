//Question 3:
//Write a JavaScript function that takes a character (a, b, c, d, or e) as input and returns a specific message for each letter using a switch case. If the input is none of these letters, return "Invalid input".

function secretMsg(character) {
    character = character.toUpperCase();
    switch (character) {
        case "a":
            console.log("Hello! you are a good person!");
            break;
        
        case "b":
            console.log("Hello! have a nice day!");
            break;
        
        case "c":
            console.log("Hello! May Allah bless you!");
            break;
        
        case "d":
            console.log("Hello! JavaScript is awesome!");
            break;
        
        case "e":
            console.log("Hello! Try React.js");
            break;
        
        default:
            console.log("Invalid Input :( Input must be in between a to e");
            
    } 
}

secretMsg("a");
