// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
  if (testInput === "") {
    alert("Empty");
  } else if (typeof parseInt(testInput) === "number") {
    alert("Is a Number");
  } else if (typeof testInput === "string") {
    alert("Not a Number");
  } else {
    alert("Error");
  }
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
  let form = document.getElementById("launchForm");

  form.addEventListener("submit", (event)=> {
    if (
      pilot.value === "" ||
      copilot.value === "" ||
      fuelLevel.value === "" ||
      cargoMass.value === ""
    ) {
      return alert("Please enter all information");
      event.preventDefault();
    }
    if (isNaN(pilot.value) === false || isNaN(copilot.value) === false) {
      return alert("Please enter valid string for pilot or copilot names");
      event.preventDefault();
    }
    if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
      return alert("Please enter valid number for fuel level or cargo level");
      event.preventDefault();
    }
    if (
      isNaN(pilot.value) === true &&
      isNaN(copilot.value) === true &&
      isNaN(fuelLevel.value) === false &&
      isNaN(cargoMass.value) === false
    ) {
    
      document.getElementById(
        "pilotStatus"
      ).innerHTML = `Pilot ${pilot.value} is ready for launch`;
     
      document.getElementById(
        "copilotStatus"
      ).innerHTML = `Co-Pilot ${copilot.value} is ready for launch`;
    }
    if (fuelLevelInput.value <= 10000) {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("launchStatus").innerHTML =
        "Shuttle Not Ready for Launch";
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("fuelStatus").innerHTML =
        "Fuel level too low for launch";
    }
    if (cargoMassInput.value >= 10000) {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("launchStatus").innerHTML =
        "Shuttle Not Ready for Launch";
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("cargoStatus").innerHTML =
        "Too much mass for the shuttle to take off";
    }
    if (cargoMassInput.value <= 10000 && fuelLevelInput.value >= 10000) {
      document.getElementById("launchStatus").innerHTML =
        "Shuttle Ready for Launch";
      document.getElementById("launchStatus").style.color = "green";
      document.getElementById("cargoStatus").innerHTML =
        "Cargo mass low enough to Launch";
      document.getElementById("fuelStatus").innerHTML =
        "Fuel is high enough to launch";
      document.getElementById("faultyItems").style.visibility = "hidden";
    }
    event.preventDefault();
  });
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
