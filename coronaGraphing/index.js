console.log(data);  //Displays nicely in the console to see what the data looks like

data.sort((a, b) => (a.date > b.date) ? 1 : -1);

let dates = [];
let totalCases = [];
let totalDeaths = [];
for(let i = 0; i < data.length; i++){
    if(data[i].state === "Maine"){
        dates.push(new Date(data[i].date));
        totalCases.push(data[i].newCases);  //data is improperly named, should be "totalCases"
        totalDeaths.push(data[i].newDeaths); // data is improperly named, should be "totalDeaths"
    }
}

let trace1 = {
    x: dates,
    y: totalCases,
    mode: "lines+markers"
}

let trace2 = {
    x: dates,
    y: totalDeaths,
    mode: "lines+markers"
}

Plotly.newPlot("chart", [trace1, trace2]);