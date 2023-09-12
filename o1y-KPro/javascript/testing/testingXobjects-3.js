//SUCCESS WORKING RIGHT

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

//Function to create an activity that has been completed
function Activity(name, activity, date, points) { 
    this.name = name; 
    this.activity = activity;
    //Today's date
    this.date = date; 
    this.points = points; 
  }
  
  // Generate 20 randomly performed activities
  for (let i = 0; i < 20; i++) {
    const activityIndex = Math.floor(Math.random() * activities.length); 
    // Index of a random activity ^
    const familyMemberIndex = Math.floor(Math.random() * family.length); 
    // Index of a random family member ^
    const date = new Date(); // Today's date
    const activity = new Activity(
      family[familyMemberIndex],
      activities[activityIndex].activity,
      date,
      activities[activityIndex].points
    );
    activitiesDone.push(activity);
  }
  
  // Sum points for each family member
  const summary = {};
  for (let p = 0; p < family.length; p++) {
    summary[family[p]] = 0;
  }
  for (let a = 0; a < activitiesDone.length; a++) {
    const pts = activitiesDone[a].points;
    const familyMemberName = activitiesDone[a].name;
    summary[familyMemberName] += pts;
    console.log(`${familyMemberName} performed ${activitiesDone[a].activity}
    on ${activitiesDone[a].date.toLocaleDateString()} and earned ${pts} points.`);
  }
  console.log(summary);

  