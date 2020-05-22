window.addEventListener("load", function () {
  let container = document.getElementById("container");
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      for (let i = 0; i < json.length; i++) {
        let astronautDiv = document.createElement("div");
        astronautDiv.className = "astronaut";

        let astronautBio = document.createElement("div");
        astronautBio.className = "bio";

        let astronautName = document.createElement("H3");
        astronautName.innerHTML = json[i].firstName + " " + json[i].lastName;
        astronautBio.appendChild(astronautName);

        let astronautImg = document.createElement("img");
        astronautImg.className = "avatar";
        astronautImg.src = json[i].picture;

        let astronautList = document.createElement("ul");
        astronautBio.appendChild(astronautList);

        let operationHour = document.createElement("li");
        operationHour.innerHTML = "Hours in space: " + json[i].hoursInSpace;
        astronautList.appendChild(operationHour);

        let isActive = document.createElement("li");
        isActive.innerHTML = "Active: " + json[i].active;
        astronautList.appendChild(isActive);

        let astronautSkills = document.createElement("li");
        astronautSkills.innerHTML = "Skills: " + json[i].skills.join(", ");
        astronautList.appendChild(astronautSkills);

        astronautDiv.appendChild(astronautBio);
        astronautDiv.appendChild(astronautImg);
        container.appendChild(astronautDiv);
      }
      console.log(json[0].skills.join(", "));
    });
  });
});
