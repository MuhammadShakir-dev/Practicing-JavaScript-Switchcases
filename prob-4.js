// Build a function that receives a grade (A, B, C, D, or F) and returns a message using a switch case to inform the user if they passed or failed. Return "Invalid grade" for any other input.

function resultChecker(grade) {
    grade = grade.toUpperCase();
    switch (grade) {
        
        case "A":
            console.log("Congrats your score is above : 80");
            break;
        
        case "B":
            console.log("Congrats your score is above : 70");
            break;
        
        case "C":
            console.log("Your score is above 60 : need to work hard");
            break;
        
        case "D":
            console.log("Your score is above 50 : need alot of hard work");
            break;
            
        case "F":
            console.log("Oppps you didn't pass :( ");
            break;
        
        default:
            console.log("Invalid grade : as grades must be lie in between A to F ");
    }
} 

resultChecker("a");
