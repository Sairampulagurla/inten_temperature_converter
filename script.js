function convertTemperature(){

    let temp = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if(temp === "" || isNaN(temp)){
        result.innerHTML = "Please enter a valid number!";
        result.style.color = "red";
        return;
    }

    temp = parseFloat(temp);

    let output = "";

    if(unit === "celsius"){

        let fahrenheit = (temp * 9/5) + 32;
        let kelvin = temp + 273.15;

        output = `
        ${fahrenheit.toFixed(2)} °F <br>
        ${kelvin.toFixed(2)} K
        `;

    }

    else if(unit === "fahrenheit"){

        let celsius = (temp - 32) * 5/9;
        let kelvin = celsius + 273.15;

        output = `
        ${celsius.toFixed(2)} °C <br>
        ${kelvin.toFixed(2)} K
        `;

    }

    else{

        let celsius = temp - 273.15;
        let fahrenheit = (celsius * 9/5) + 32;

        output = `
        ${celsius.toFixed(2)} °C <br>
        ${fahrenheit.toFixed(2)} °F
        `;

    }

    result.style.color = "green";
    result.innerHTML = output;

}