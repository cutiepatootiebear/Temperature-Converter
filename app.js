console.log("fired");
const celciusInput = document.querySelector("#celcius > input");
console.log("celciusInput", celciusInput);
const fahrenheitInput = document.querySelector("#fahrenheit > input");
console.log("fahrenheitInput", fahrenheitInput);
const kelvinInput = document.querySelector("#kelvin > input");
console.log("kelvinInput", kelvinInput);

function roundNum(num) {
  return Math.round(num*100) /100;
}


function celciusTofahrenheitAndKelvin() {
  const cTemp = parseFloat(celciusInput.value);
  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;
  console.log(typeof cTemp);
  console.log("kTemp", kTemp);
  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelciusAndKelvin() {
  const fTemp = parseFloat(fahrenheitInput.value);
  console.log("ftemp", ftemp);
  const cTemp = (fTemp - 32) * (5 / 9);
  console.log("cTemp", cTemp);
  const kTemp = (ftemp + 459.67) * 5/9;
  console.log("kTemp", kTemp);
  celciusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelciusAndfahrenheit() {
 const kTemp = parseFloat(kelvinInput.value);
 const cTemp = kTemp - 273.15;
 const fTemp = 9/5 * (kTemp - 273) + 32;
 console.log('Ftemp', fTemp);
 celciusInput.value = roundNum(cTemp);
 fahrenheitInput.value = roundNum(fTemp);
}

function main(){
  celciusInput.addEventListener("input", celciusTofahrenheitAndKelvin);
  fahrenheitInput.addEventListener("input", fahrenheitToCelciusAndKelvin);
  kelvinInput.addEventListener("input", kelvinToCelciusAndfahrenheit);
}

main();
