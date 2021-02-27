//I use let here to create a variable that is storing a function
//Just an alternate way to create function
//I am using an arrow function that has this format:
//(parameters)=>{function content;}
let generateRandomList = (length, maxSize)=>{
    let list = [];

    for(let i = 0; i < length; i++){
        list.push(Math.floor(Math.random() * maxSize));
    }

    return list
}

//I use window.function here to place it on the DOM (the webpage)
//This makes it accessible from the console.
window.isDivisible = (dividend, divisor)=>{
    return dividend % divisor === 0;
}

window.divisors = (num)=>{
    let divisors = [];

    for(let i = 0; i < num; i++){
        if(num % i === 0){
            divisors.push(i);
        }
    }

    return divisors;
}

window.listOverlap = ()=>{
    //Populate the two arrays.  Both length 25 with random numbers between 0 and 30
    let list1 = generateRandomList(25, 30);
    let list2 = generateRanomList(25, 30);
    let result = [];

    for(let i = 0; i < list1.length; i++){
        //Shorthand if statement.  One thing to check, one thing to do, put it all on the same line
        if(list2.includes(list1[i])) result.push(list1[i]);
    }

    return result;
}

window.sumAndAverage = ()=>{
    let list = generateRandomList(100, 100);
    let sum = 0;

    for(let i = 0; i < list.length; i++){
        sum += list[i];
    }

    //To return 2 values I put them both in an array
    return [sum, sum / list.length];
}

window.boxConstruction = (x)=>{
    let box = (4 * Math.pow(x, 3)) - (140 * Math.pow(x, 2)) + (1200 * x);

    let length = 30 - 2 * x;
    let width = 40 - 2 * x;
    let height = x;

    console.log(`With a value of x = ${x}, your box volume will be: ${box}`);
    console.log(`With a value of x = ${x}, your box dimensions are : `);
    console.log(`Length: ${length}`);
    console.log(`Width: ${width}`);
    console.log(`Height: ${height}`);
}