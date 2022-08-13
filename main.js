var myAge = 27;
// I am 27 years old. so var myAge = 27. 

var earlyYears = 2;

earlyYears = (2 * 10.5)
// redefining the variable earlyYears to be earlyYears * 10.5

laterYears = (myAge - 2);
// subtracting 2 from myAge to create the laterYears variable

dogYears = (laterYears * 4);

// console.log(earlyYears)

// console.log(laterYears)

var myAgeInDogYears = (earlyYears + laterYears)

// console.log(myAgeInDogYears)

var myName = 'isAiah'.toLowerCase();

// created a string using the .toLowerCase function to make my name appear in all lower case letters

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`)
// used variables created previosly in corresponding words in the sentence in order to create a human to dog age conversion function. 
