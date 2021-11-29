const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".searchInput");
const displayCon = document.querySelector(".display-container");
searchBtn.addEventListener('click', function(){
    async function getData(){
        try{
            let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchInput.value + '&APPID=bb432250d4b99fc4c9c2e06d45341ef0')
            displayCon.textContent = "";
            let newT = document.createElement("div");
            let data = await response.json(); 
            newT.textContent = "the tempature is: " + data.main.temp;
            displayCon.appendChild(newT);
        } catch{
            let newT = document.createElement("div");
            newT.textContent = "city not found";
            displayCon.appendChild(newT)
        }

    }
    getData();
});