const logSkyColor = () => {
    let color = 'blue';
    console.log(color); // Prints 'blue'
};

logSkyColor();
console.log(color);

//New exercise

let num = 50;

const logNum = () => {
    num = 100; // Take note of this line of code
    console.log(num);
};

logNum();// Prints 100
console.log(num); //Prints 100
//Um... 
//Hmmm... 

//Third example from Scope exercise

const logSkySolor = () => {
    const dusk = true;
    let color = 'blue';
    if (dusk) {
        let color = 'pink';
        console.log(colour); // Prints "pink"
    }
    console.log(color); // Prints "blue"
};

console.log(color); // throws a ReferenceError