//Question 1:
//Write a JavaScript function that takes a number (1 to 7) as an input and returns the corresponding day of the week using a switch case.

function weekDays(day) {
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        
        case 2:
            console.log("Tuesday");
            break;   
        
        case 3:
            console.log("Wednesday");
            break;
        
        case 4:
            console.log("Thursday");
            break;
        
        case 5:
            console.log("Friday");
            break;
        
        case 6:
            console.log("Saturday");
            break;
        
        case 7:
            console.log("Sunday");
            break;
        
        default:
            console.log("Week days must be in between 1 to 7")
        
    }
}

weekDays(4);
