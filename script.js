// Write your JavaScript code here!

window.addEventListener("load", function () {
  document.getElementById("formSubmit").addEventListener("click", function () {
    let pilot = document.getElementById("pilotName")
    let copilot = document.getElementById("copilotName")
    let fuelLevel = document.getElementById("fuelLevel")
    let cargoMass = document.getElementById("cargoMass")
    let submit = document.getElementById("formSubmit")
    let launchStatus=document.getElementById("launchStatus")
    
    formSubmission(document, pilot, copilot, fuelLevel, cargoMass);
  });
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
});
