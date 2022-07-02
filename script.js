// Write your JavaScript code here!
window.addEventListener("load", async function () {
  // 1. fetch all planets from link. all planets are a list of Planet objects
  let listedPlanets = await myFetch();

  // 2. use pickPlanet, which chooses a planet randomly and output ONE Planet object
  let listedPlanetsResponse = pickPlanet(listedPlanets)

  console.log(listedPlanetsResponse)

  // 3. Using this planet object, we would have the needed metadata to put in addDestination
  // 4 . Using the metadata as input for addDestination, we can now build the UI for the html
  addDestinationInfo(
    document,
    listedPlanetsResponse.name,
    listedPlanetsResponse.diameter,
    listedPlanetsResponse.star,
    listedPlanetsResponse.distance,
    listedPlanetsResponse.moons,
    listedPlanetsResponse.image
  )
  // 5. Build submit logic
  document.getElementById("formSubmit").addEventListener("click", function () {
    let pilot = document.getElementById("pilotName");
    let copilot = document.getElementById("copilotName");
    let fuelLevel = document.getElementById("fuelLevel");
    let cargoMass = document.getElementById("cargoMass");
    let submit = document.getElementById("formSubmit");
    let launchStatus = document.getElementById("launchStatus");

    formSubmission(document, pilot, copilot, fuelLevel, cargoMass);
    
  });
});
