//local storage (saves info on the website when closed down)

clickCounter();
function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("demo").innerHTML = localStorage.clickcount;
}

//html

<p><button onclick="clickCounter()" type="button">click</button></p>

<p>Number of clicks:</p>
<p id="demo"></p>