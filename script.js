// const { Result } = require("postcss");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '99a6dc4042msh6d3653e6cd0ce71p1390e8jsn77a831b27120',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const run = async (city) => {
    CityName.innerHTML = city;
    const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
    const result = await response.json()
        .then((response) => {
            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

        }).catch((error) => {
            console.log("Error Occurred" + error);
        })
}


submit.addEventListener('click', (e) => {
    e.preventDefault()
    run(city.value);
})

run("Karachi")



