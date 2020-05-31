const celciusInput = document.querySelector("#celcius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

console.log("fahrenheitInput", fahrenheitInput);
console.log("kelvinInput", kelvinInput);
console.log("celciusInput", celciusInput);

function roundNum(num) {
  return Math.round(num*100) /100;
}


function celciusTofahrenheitAndKelvin() {
  const cTemp = parseFloat(celciusInput.value);
  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;

  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);

  console.log(typeof cTemp);
  console.log("kTemp", kTemp);
}

function fahrenheitToCelciusAndKelvin() {
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5 / 9);
  const kTemp = (fTemp + 459.67) * 5/9;

  celciusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);

  console.log("cTemp", cTemp);
  console.log("ftemp", fTemp);
  console.log("kTemp", kTemp);
}

function kelvinToCelciusAndfahrenheit() {
 const kTemp = parseFloat(kelvinInput.value);
 const cTemp = kTemp - 273.15;
 const fTemp = 9/5 * (kTemp - 273) + 32;

 celciusInput.value = roundNum(cTemp);
 fahrenheitInput.value = roundNum(fTemp);

 console.log('Ftemp', fTemp);
}

function main(){
  celciusInput.addEventListener("input", celciusTofahrenheitAndKelvin);
  fahrenheitInput.addEventListener("input", fahrenheitToCelciusAndKelvin);
  kelvinInput.addEventListener("input", kelvinToCelciusAndfahrenheit);
}

main();
