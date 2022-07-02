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
  const missionTarget = document.getElementById("missionTarget");

  const missionDiv = document.createElement("h2");
  missionDiv.innerHTML = "Mision Destination";
  missionTarget.appendChild(missionDiv);

  const ol = document.createElement("ol");
  missionTarget.appendChild(ol);

  const nameLi = document.createElement("li");
  nameLi.innerHTML = `Name : ${name}`;
  ol.appendChild(nameLi);

  const diameterLi = document.createElement("li");
  diameterLi.innerHTML = `Diameter : ${diameter}`;
  ol.appendChild(diameterLi);

  const starLi = document.createElement("li");
  starLi.innerHTML = `Star: ${star}`;
  ol.appendChild(starLi);

  const distanceLi = document.createElement("li");
  distanceLi.innerHTML = `Distance from Earth: ${distance}`;
  ol.appendChild(distanceLi);

  const moonLi = document.createElement("li");
  moonLi.innerHTML = ` Number of Moons: ${moons}`;
  ol.appendChild(moonLi);

  const image = document.createElement("img");
  image.src = imageUrl;
  missionTarget.appendChild(image);
}
//   // Here is the HTML formatting for our mission target div.
//   /*
//                 <h2>Mission Destination</h2>
//                 <ol>
//                     <li>Name: </li>
//                     <li>Diameter: </li>
//                     <li>Star: ${star}</li>
//                     <li>Distance from Earth: </li>
//                     <li>Number of Moons: </li>
//                 </ol>
//                 <img src="">
//    */
// }

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

  form.addEventListener("submit", (event) => {
    if (
      pilot.value === "" ||
      copilot.value === "" ||
      fuelLevel.value === "" ||
      cargoMass.value === ""
    ) {
      return alert("Please enter all information");
    }
    if (isNaN(pilot.value) === false || isNaN(copilot.value) === false) {
      return alert("Please enter valid string for pilot or copilot names");
    }
    if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
      return alert("Please enter valid number for fuel level or cargo level");
    }
    if (
      isNaN(pilot.value) === true &&
      isNaN(copilot.value) === true &&
      isNaN(fuelLevel.value) === false &&
      isNaN(cargoMass.value) === false &&
      fuelLevel.value <= 10000 &&
      cargoMass.value <= 10000
    ) {
      document.getElementById("launchStatus").innerHTML =
        "Shuttle Not Ready for Launch";
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById(
        "pilotStatus"
      ).innerHTML = `Pilot ${pilot.value} is ready for launch`;
      document.getElementById(
        "copilotStatus"
      ).innerHTML = `Co-Pilot ${copilot.value} is ready for launch`;
      event.preventDefault();
      document.getElementById("fuelStatus").innerHTML =
        "Fuel level too low for launch";
    }
    if (
      isNaN(pilot.value) === true &&
      isNaN(copilot.value) === true &&
      isNaN(fuelLevel.value) === false &&
      isNaN(cargoMass.value) === false &&
      fuelLevel.value >= 10000 &&
      cargoMass.value >= 10000
    ) {
      document.getElementById("launchStatus").innerHTML =
        "Shuttle Not Ready for Launch";
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById(
        "pilotStatus"
      ).innerHTML = `Pilot ${pilot.value} is ready for launch`;
      document.getElementById(
        "copilotStatus"
      ).innerHTML = `Co-Pilot ${copilot.value} is ready for launch`;
      event.preventDefault();
      document.getElementById("cargoStatus").innerHTML =
        "Cargo mass too high for launch";
    }
    if (
      isNaN(pilot.value) === true &&
      isNaN(copilot.value) === true &&
      isNaN(fuelLevel.value) === false &&
      isNaN(cargoMass.value) === false &&
      cargoMass.value <= 10000 &&
      fuelLevel.value >= 10000
    ) {
      document.getElementById("launchStatus").innerHTML =
        "Shuttle Ready for Launch";
      document.getElementById("launchStatus").style.color = "green";
      document.getElementById(
        "pilotStatus"
      ).innerHTML = `Pilot ${pilot.value} is ready for launch`;
      document.getElementById(
        "copilotStatus"
      ).innerHTML = `Co-Pilot ${copilot.value} is ready for launch`;
      document.getElementById("faultyItems").style.visibility = "visible";
    }
    event.preventDefault();
  });
}

async function myFetch() {
  let planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then((response) => response.json());

  return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
