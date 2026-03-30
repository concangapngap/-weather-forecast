var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

// Print the first high temperature to the console.
// Print the last low temperature to the console.
// What is the average high temperature from the data set?
// What is the average low temperature from the data set?

// Print the first high temperature to the console.
console.log(highTemperatures[0]);
// Print the last low temperature to the console.
console.log(lowTemperatures[5]);
// What is the average high temperature from the data set?
let a = 0;
let b=0;
for (let i=0;i<highTemperatures.length;i++) {
    a+=highTemperatures[i];
    b++;
}
console.log(a/b);
// What is the average low temperature from the data set?
let c = 0;
let d=0;
for (let i=0;i<lowTemperatures.length;i++) {
    c+=lowTemperatures[i];
    d++;
}
console.log(c/d);

