function convertCelsiusToFahrenheit() {
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const resultElement = document.getElementById("result");
  
    if (celsiusInput.value !== "") {
      const celsius = parseFloat(celsiusInput.value);
      const fahrenheit = (celsius * 9) / 5 + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
      resultElement.innerHTML = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
      resultElement.innerHTML = "Please enter a value in Celsius.";
    }
  }
  
  function convertFahrenheitToCelsius() {
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const resultElement = document.getElementById("result");
  
    if (fahrenheitInput.value !== "") {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      const celsius = ((fahrenheit - 32) * 5) / 9;
      celsiusInput.value = celsius.toFixed(2);
      resultElement.innerHTML = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
    } else {
      resultElement.innerHTML = "Please enter a value in Fahrenheit.";
    }
  }
  