//making a function where the value of time is calculated
function calculate(){
//first get the destination input from the user
	let destination = document.getElementById('destination').value;
//Get the input of the speed that the user puts in
	let speed = document.getElementById('speed').value;
//Make sure to have a function that will calculate the time left
	let time = ((destination/speed)*60);
//make the value of time will be replaced with the new time.
	document.getElementById("time").value= time;
}

// making a function where the value of marsmiles are calculated/kilometers are converted to marsmiles
function conversion(){
//give the variable mile a calculation behind it
  let mile = (document.getElementById('kilometers').value/29);
//give marsmiles the value of the variable
document.getElementById("marsMiles").value = mile;

}

//making the countdown of fuel and destination
//giving 2 variables their value
let distanceTraveled = 39;
let fuelLeft = 40;
//saying there is an interval function of 1 second
setInterval(function()
{
  //saying those two variables need to count down with 1 each time
  distanceTraveled--  
  fuelLeft--
  //if distance hits 15, it will give an alert
  if (distanceTraveled === 15) {
    alert("You're halfway there!");
  }  
  //if distance hits 0, it will give an alert
  if(distanceTraveled == 0){
  	alert("Arrived at your destination");
  }
  //if fuel hits 20, it will give an alert
  if (fuelLeft === 20) {
    alert("20.000 gallons of fuel left");
  }  
  //if fuel hits 0, it will give an alert
  if(fuelLeft == 0){
  	alert("0 gallons of fuel left");
  }
}, 1000);