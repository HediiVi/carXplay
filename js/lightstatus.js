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
 getLightStatus();

};
// window.onload can work without <body onload="">
window.onload = init;


//light voiture
function getLightStatus(){
	document.getElementById('Head').innerHTML="HeadLight ="+navigator.vehicle.lightStatus.get().head;	
	document.getElementById('rightTurn').innerHTML="rightTurnLight ="+navigator.vehicle.lightStatus.get().rightTurn;	
	document.getElementById('leftTurn').innerHTML="leftTurnLight ="+navigator.vehicle.lightStatus.get().leftTurn;	
	document.getElementById('hasard').innerHTML="hasardLight ="+navigator.vehicle.lightStatus.get().hasard;	
	document.getElementById('brake').innerHTML="brakeLight ="+navigator.vehicle.lightStatus.get().brake;	
	document.getElementById('fog').innerHTML="fogLight ="+navigator.vehicle.lightStatus.get().fog;	
	document.getElementById('parking').innerHTML="parkingLight ="+navigator.vehicle.lightStatus.get().parking;	
	document.getElementById('highBeam').innerHTML="highBeamLight ="+navigator.vehicle.lightStatus.get().highBeam;	
	document.getElementById('automaticHeadlights').innerHTML="automaticHeadlightsLight ="+navigator.vehicle.lightStatus.get().automaticHeadlights;	
	document.getElementById('dynamicHighBeamlights').innerHTML="dynamicHighBeamLight ="+navigator.vehicle.lightStatus.get().dynamicHighBeam;	
	document.getElementById('ExteriorTemperature').innerHTML="ExteriorTemperature ="+navigator.vehicle.Temperature.get().exteriorTemperature;	
	document.getElementById('InteriorTemperature').innerHTML="InteriorTemperature ="+navigator.vehicle.Temperature.get().interiorTemperature;
}


