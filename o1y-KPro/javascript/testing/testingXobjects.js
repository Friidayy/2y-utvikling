const land = {navn: "Norge",
hovedstad: "Oslo",
myntenhet: "NOK"
}

console.log(land.navn)



const activities = [ 
    {activity: "Lage middag",
    points: 30 
    }, 
    {activity: "Rydde etter middag", 
    points: 15 
    }, 
    {activity: "Støvsuge stue", 
    points: 15 
    }, 
    {activity: "Vaske badet", 
    points: 40} 
    ];

    for (let i = 0; i < activities.length; i++) {
        console.log(activities[i].activity);
        console.log(activities[i].points);
    }



const activitiesDone = [] 
const family = ["Hilde", "Finn", "Markus", "Martinus"] 
function Activity(name, activity, points) { 
    this.name = name; 
    this.activity = activity; 
    this.date = new Date();
    this.points = points; 
} 

// Lag et activity objekt
let done = new Activity(family[0], "Lage middag", 30); 
activitiesDone.push(done) 
let done2 = new Activity(family[1], "Oppvask middag", 15); 
activitiesDone.push(done2)

for(let i = 0; i < Math.random() * 2; i++)

for(let i = 0; i < activitiesDone.length; i++) {
    console.log(activitiesDone[i].name);
}

//Lag en løkke som genererer 20 random elementer i activitiesDone 
//(Hent ut tilfeldige elementer fra activties og family) og skriv listen til console.log

//make a loop that generates 20 random elements in activitiesDone

