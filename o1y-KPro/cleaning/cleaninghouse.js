//CONNECT TO FIREBASE

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCpppENTfYT4uOxI3_7zUsM8iejZ09kuQ",
    authDomain: "testsubjectx3-c946d.firebaseapp.com",
    projectId: "testsubjectx3-c946d",
    storageBucket: "testsubjectx3-c946d.appspot.com",
    messagingSenderId: "84394191810",
    appId: "1:84394191810:web:d893a057695367f79e845b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firestore database
  var db = firebase.firestore();

  // Get a reference to the form element
var form = document.querySelector('form');

  // Get a reference to the submission table
  const submissionTable = document.getElementById('submissionTable');


// TABLES

  // Listen for new submissions and update the table
  db.collection('done').onSnapshot((querySnapshot) => {
    // Clear the table
    submissionTable.getElementsByTagName('tbody')[0].innerHTML = '';

    // Add a row for each submission
    querySnapshot.forEach((doc) => {
      const data = doc.data();

      // Create a new table row
      const row = submissionTable.insertRow();

      // Get the date
      row.insertCell().innerText = data.date.toDate().toLocaleString();

      // Get the user name
      db.collection('users').where("id", "==", data.taskId).get().then((taskDoc) => {
        if(!taskDoc.empty) {
          const taskData = taskDoc.docs[0];
          row.insertCell().innerText = taskData.data().name;
        }

      // Get the task name and points
      db.collection('tasks').where("id", "==", data.taskId).get().then((taskDoc) => {
        if(!taskDoc.empty) {
          const taskData = taskDoc.docs[0];
          row.insertCell().innerText = taskData.data().name;
          row.insertCell().innerText = taskData.data().points;

        }
      });
    });
  });
});



  
  //INSERT NEW TASKS FROM FIREBASE
  
  // Get a reference to the dropdown element
  var dropdown = document.getElementById("dropdown");
  var userdropdown = document.getElementById("userdropdown");
  
  // Get the data from the Firestore collection
  db.collection("tasks").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // Create a new option element for each document in the collection
      var option = document.createElement("option");
      option.value = doc.data().id;
      option.text = doc.data().name + " (" + doc.data().points + " points)";
      dropdown.appendChild(option);
    });
  });

  // Get the data from the Firestore collection
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // Create a new option element for each document in the collection
      var option = document.createElement("option");
      option.value = doc.data().id;
      option.text = doc.data().name;
      userdropdown.appendChild(option);
    });
  });
  
  
  
  //GET THE SELECTED "TASK" AND "USER" TO CONNECT TO "DONE" IN THE DATABASE WHEN SUBMITTED
  
  
// Listen for the form submit event
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the default form submit action
  
  // Get the selected task and user values
  var taskId = parseInt(document.getElementById('dropdown').value);
  var userId = parseInt(document.getElementById('userdropdown').value);

   // Get the current date and time
   var now = new Date();
  
  // If both values are selected
  if (taskId && userId) {
    // Create a new document in the "done" collection with the task and user values
    db.collection('done').add({
      taskId: taskId,
      userId: userId,
      date: now
    })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
      // Clear the form inputs
      form.reset();
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
  }
});

