var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

// Print the first high temperature to the console.
// Print the last low temperature to the console.
// What is the average high temperature from the data set?
// What is the average low temperature from the data set?
// What is the median high temperature from the data set?
// What is the median low temperature from the data set?
// *median: trung vị

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

// What is the median high temperature from the data set?
for (let i=0; i<highTemperatures.length; i++) {
    for (let j=i+1;j<highTemperatures.length; j++) {
        if (highTemperatures[i] > highTemperatures[j]) {
            let temNumber = highTemperatures[i];
            highTemperatures[i] = highTemperatures[j];
            highTemperatures[j] = temNumber;
        }
    }
}
let midHigh = Math.floor(highTemperatures.length/2);
let medianHigh;
if (highTemperatures.length%2 === 0) {
    medianHigh = (highTemperatures[midHigh-1] + highTemperatures[midHigh])/2;
} else {
    medianHigh = highTemperatures[midHigh];
}
console.log(medianHigh)

// What is the median low temperature from the data set?
// *median: trung vị
for (let i=0; i<lowTemperatures.length; i++) {
    for (let j=i+1;j<lowTemperatures.length; j++) {
        if (lowTemperatures[i] > lowTemperatures[j]) {
            let temNumber = lowTemperatures[i];
            lowTemperatures[i] = lowTemperatures[j];
            lowTemperatures[j] = temNumber;
        }
    }
}
let midLow = Math.floor(lowTemperatures.length/2);
let medianLow;
if (lowTemperatures.length%2 === 0) {
    medianLow = (lowTemperatures[midLow-1] + lowTemperatures[midLow])/2;
} else {
    medianLow = lowTemperatures[midLow];
}
console.log(medianLow)