// Simulated IoT Sensor Data
document.addEventListener("DOMContentLoaded", () => {
  const sensorDataDiv = document.getElementById("sensorData");

  setInterval(() => {
    const temperature = (Math.random() * 5 + 25).toFixed(1);
    const humidity = (Math.random() * 11 + 40 ).toFixed(1);
    const nutrientLevel = (Math.random() * 2 + 5.5).toFixed(1);

    sensorDataDiv.innerHTML = `
      <p>Temperature: ${temperature} °C</p>
      <p>Humidity: ${humidity} %</p>
      <p>Nutrient Level: ${nutrientLevel} pH</p>
    `;
  }, 2000);
});

