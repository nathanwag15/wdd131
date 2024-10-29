const temperatureContent = document.querySelector('#temperature')
const conditionsContent = document.querySelector('#conditions')
const windContent = document.querySelector('#wind')
const windChillContent = document.querySelector('#windChill')

const numTemp = 72;
const temperature = `${numTemp}°F`;
temperatureContent.textContent = temperature;

// const conditions = "Cloudy";
// conditionsContent.textContent = conditions;

const windSpeed = 3
const wind = `${windSpeed} mph` 
windContent.textContent = wind;

function calculateWindChill(temperature, windSpeed) {
    const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) 
    + (0.4275 * temperature * Math.pow(windSpeed, 0.16));

    return windChill.toFixed(2);
}


const windChillNumber = calculateWindChill(numTemp, windSpeed);
const windChill = `${windChillNumber}°F`;

windChillContent.textContent = windChill;
