//fetching the data from the API server by using my unique API key and the city name assigned(sanjose)

fetch("http://localhost:8003/")
    .then(response => response.json())

    // checking wheather the data is fetched by displaying the data in the console just to make sure the API call is successfull.

    .then(data => {
        console.log(data.weather_temperature)
        console.log(data.city)
        console.log(data.weather_description)
        console.log(data.weather_wind)
        console.log(data.pressure)
        console.log(data.humidity)
        console.log(data.weather_when)


        // making a variable result to assign the value in it to display the data in the main page.

        var result = `
        <h6 style="text-align:right;">Accessed at:${data.weather_when}</h6>
        <h1> ${data.city}</h1>
        <h2>Main Weather Condition = ${data.weather_description}</h2>
        <h3>Pressure= ${data.pressure}hpa</h3>
        <h3> Humidity=${data.humidity}%</h3>
        <h3>Temperature = ${data.weather_temperature} °C</h3>
        <h3>Wind Speed  = ${data.weather_wind} m/s </h3>
        `


        //selecting the ID "card" created in the html page and assigning the data which is in result to the id "card".

        document.getElementById("card").innerHTML = result;
    })
