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

const family = ["Hilde","Finn", "Markus", "Martinus"];

//Array for alle utførte aktivteter 
const activitiesDone = [];

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
}

// Display summary table in HTML
const tableBody = document.getElementById("table-body");
for (let i = 0; i < family.length; i++) {
  const row = document.createElement("tr");
  const nameCol = document.createElement("td");
  nameCol.textContent = family[i];
  const pointsCol = document.createElement("td");
  pointsCol.textContent = summary[family[i]];
  row.appendChild(nameCol);
  row.appendChild(pointsCol);
  tableBody.appendChild(row);
}
