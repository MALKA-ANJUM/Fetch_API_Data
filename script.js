let api = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=999bb359ad83ef3549cbbef7f3cdf2e1'
let temp, humidity

let fetchApiDataTemp = document.getElementById("apiDataTemp")
let fetchApiDataHumid = document.getElementById("apiDataHumid")

fetch(api)
    .then(res => res.json())
    .then(data => {
            temp = data.main.temp
            humidity = data.main.humidity
            console.log(temp,humidity)
            fetchApiDataTemp.innerHTML = "Temperature" + ": " + temp
            fetchApiDataHumid.innerHTML = "Humidity" + ": " + humidity
    })


    .catch(error => console.log('ERROR'))


