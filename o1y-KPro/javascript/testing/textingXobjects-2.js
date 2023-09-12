//GONE WRONG (from teams)

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

const family = ["Hilde","Finn", "Markus", "Martinus"]

//Array for alle utførte aktivteter 
const activitiesDone = []

//Funksjon for å opprette en aktivitet som er utført
function Activity(name, activity, points) { 
    this.name = name; 
    this.activity = activity; 
    //Dagens dato 
    this.date = new Date(); 
    this.points = points; 
  }

  //Generer 20 tilfeldig utførte aktiviteter 
  for (let i = 0; i < 20; i++) { 
      //Index til en tilfeldig aktivitet 
      let a = Math.floor(Math.random()*activities.length) 
      //index til et tilfeldig familiemedlem 
      let p = Math.floor(Math.random()*family.length) 
      //Oppretter et objekt for utført aktivitet 
      const theActivity = new Activity(family[p], activities[a].activity, 
    activities[a].points) 
      //legger aktiviteten til arrayen activitiesDone 
      activitiesDone.push(theActivity)


  } 
  //Arrayen som lagrer sum poeng for hvert familiemedlem 
  const summary = [];

  for (let p = 0; p < family.length; p++) { 
    //Initialiserer alle får 0 poeng summary[family[p]] = 0 

  }

  //Går igjenneom hele activitiesDone arrayen for å summere per familiemedlem
  for (let a = 0; a<activitiesDone.length; a++) { 
      let pts = activitiesDone[a].points 
      let navnFamilieMedlem = activitiesDone[a].name 
      summary[navnFamilieMedlem] += pts 
    
  } 
  console.log(summary)



