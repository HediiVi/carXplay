var startTime;
var checkTime;

//Initialize function
var init = function () {
    // TODO:: Do your initialization job
    console.log("init() called");

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
 getinfo();

};
// window.onload can work without <body onload="">
window.onload = init;

//get all vehicule info
function getinfo(){
	document.getElementById('Battery').innerHTML="Voltage batterie ="+navigator.vehicle.batteryStatus.get().voltage;
	document.getElementById('Charge').innerHTML="Charge level ="+navigator.vehicle.batteryStatus.get().chargeLevel;
	document.getElementById('Current').innerHTML="Current ="+navigator.vehicle.batteryStatus.get().current;
	
	document.getElementById('Zone').innerHTML="Zone ="+navigator.vehicle.batteryStatus.get().zone;
	document.getElementById('DistanceSinceStart').innerHTML="DistanceSinceStart ="+navigator.vehicle.odometer.get().distanceSinceStart;
	document.getElementById('DistanceTotal').innerHTML="DistanceTotal ="+navigator.vehicle.odometer.get().distanceTotal;
	document.getElementById('Speed').innerHTML="Speed ="+navigator.vehicle.vehicleSpeed.get().speed;	
	
	document.getElementById('EngineOilT').innerHTML="EngineOil Temperature ="+navigator.vehicle.engineOil.get().temperature;	
	document.getElementById('EngineOilP').innerHTML="EngineOil Pressure ="+navigator.vehicle.engineOil.get().pressure;	
	document.getElementById('EngineOilR').innerHTML="EngineOil Remaining ="+navigator.vehicle.engineOil.get().remaining;
	document.getElementById('EngineCoolantL').innerHTML="EngineCoolant Level ="+navigator.vehicle.engineCoolant.get().level;
	document.getElementById('EngineCoolantT').innerHTML="EngineCoolant Temperature ="+navigator.vehicle.engineCoolant.get().temperature;
	document.getElementById('SteeringWheel').innerHTML="SteeringWheel ="+navigator.vehicle.steeringWheel.get().angle;
	document.getElementById('TempratureEx').innerHTML="Temprature Exterior ="+navigator.vehicle.temperature.get().exteriorTemperature;
	document.getElementById('TempratureIN').innerHTML="Temprature Interior ="+navigator.vehicle.temperature.get().interiorTemperature;

}
//Lecture du niveau de la batterie
function getBatteryStatus(){
	document.getElementById('Battery').innerHTML="Voltage batterie ="+navigator.vehicle.batteryStatus.get().voltage;
	document.getElementById('Charge').innerHTML="Charge level ="+navigator.vehicle.batteryStatus.get().chargeLevel;
	document.getElementById('Current').innerHTML="Current ="+navigator.vehicle.batteryStatus.get().current;
	document.getElementById('Zone').innerHTML="Zone ="+navigator.vehicle.batteryStatus.get().zone;
}
//lecture Odometer
function getOdometer(){
	document.getElementById('DistanceSinceStart').innerHTML="DistanceSinceStart ="+navigator.vehicle.odometer.get().distanceSinceStart;
	document.getElementById('DistanceTotal').innerHTML="DistanceTotal ="+navigator.vehicle.odometer.get().distanceTotal;
}
//lecture de vehicule Speed
function getVehiculeSpeed(){
	document.getElementById('Speed').innerHTML="Speed ="+navigator.vehicle.vehicleSpeed.get().speed;	
}
//light voiture
function getLightStatus(){
	document.getElementById('Head').innerHTML="HeadLight ="+navigator.vehicle.lightStatus.get().head;	
	
}

//time

$(document).ready(function() {
// Create two variable with the names of the months and days in an array
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// Create a newDate() object
var newDate = new Date();
// Extract the current date from Date object
newDate.setDate(newDate.getDate());
// Output the day, date, month and year   
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval( function() {
	// Create a newDate() object and extract the seconds of the current time on the visitor's
	var seconds = new Date().getSeconds();
	// Add a leading zero to seconds value
	$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);
	
setInterval( function() {
	// Create a newDate() object and extract the minutes of the current time on the visitor's
	var minutes = new Date().getMinutes();
	// Add a leading zero to the minutes value
	$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
	
setInterval( function() {
	// Create a newDate() object and extract the hours of the current time on the visitor's
	var hours = new Date().getHours();
	// Add a leading zero to the hours value
	$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);	
});
