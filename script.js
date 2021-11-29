const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".searchInput");
const displayCon = document.querySelector(".display-container");
const celciusBtn = document.querySelector(".celcius");
const fahrenheitBtn = document.querySelector(".fahrenheit");
let celV;
let fahV;
searchBtn.addEventListener('click', function(){
    async function getData(){
        try{
            let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchInput.value + '&APPID=bb432250d4b99fc4c9c2e06d45341ef0')
            displayCon.textContent = "";
            let newT = document.createElement("div");
            let data = await response.json(); 
            newT.textContent = "the tempature(kelvin) is: " + data.main.temp;
            celV = Math.floor(data.main.temp - 273.15);
            fahV = Math.floor(celV*9/5 + 32);
            
            displayCon.appendChild(newT);
        } catch{
            celV = undefined;
            fahV = undefined;
            let newT = document.createElement("div");
            newT.textContent = "city not found";
            displayCon.appendChild(newT)
        }

    }
    getData();
});
celciusBtn.addEventListener('click', function(){
    displayCon.textContent = "";
    let newT = document.createElement('div');
    newT.textContent = "the tempature(celcius) is: " + celV;
    if(celV == undefined || celV == null){
        newT.textContent = "city not found";
    }
    displayCon.appendChild(newT);
});
fahrenheitBtn.addEventListener('click', function(){
    displayCon.textContent = "";
    let newT = document.createElement('div');
    newT.textContent = "the tempature(fahrenheit) is: " + fahV;
    if(fahV == undefined || fahV == null){
        newT.textContent = "city not found";
    }
    displayCon.appendChild(newT);
});
