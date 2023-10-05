const key = "f19603c63dc0d35eca1980b7b7815211";

async function localTempo(cityName) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&lang=pt_br`);
        const data = await response.json();
        console.log(data);
        DatsScreen(data);
    } catch (error) {
        console.error(error);
    }
}
function DatsScreen(data) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + data.name;
    
    const temperaturaCelsius = Math.round(data.main.temp - 273.15).toFixed(2);
    
    document.querySelector(".temp").innerHTML = temperaturaCelsius + " °C";

    document.querySelector(".clima").innerHTML = data.weather[0].description

    document.querySelector(".umidade").innerHTML = data.main.humidity + "%"

    document.querySelector(".img-previsao").src =`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

function buttonClick() {
    const cityName = document.querySelector('.cities').value;
    localTempo(cityName);
}
