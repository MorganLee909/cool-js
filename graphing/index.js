//Create 100 random people
let people = [];
for(let i = 0; i < 100; i++){
    let person = {
        name: faker.name.findName(),
        age: Math.ceil(Math.random() * 100), // Create random age from 1 to 100
        job: faker.name.jobTitle()
    }
    
    people.push(person);
}

/*
Go through our array of people to sort the data
We will graph the correlation between age and name length
x = age
y = name length
*/
let ages = [];
let nameLengths = [];
for(let i = 0; i < people.length; i++){
    ages.push(people[i].age),
    nameLengths.push(people[i].name.length); 
}

//Plot the data
let trace1 = {
    x: ages,
    y: nameLengths,
    mode: "markers",
    type: "scatter"
}

Plotly.newPlot("chart", [trace1]);