function convertToCelsius(temp) {
    let celsius = (temp - 32) * 5 / 9;
    return Math.round(celsius * 10) / 10;
}


function convertToFahrenheit(temp) {
    let fahrenheit = (temp * 9 / 5) + 32;
    return Math.round(fahrenheit * 10) / 10;
}