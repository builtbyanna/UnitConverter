/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let lengthConv = document.getElementById("length-el");
let volumeConv = document.getElementById("volume-el");
let massConv = document.getElementById("mass-el");
let convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function () {
  let inputField = document.getElementById("input").value; //grabs the input

  const math1 = inputField * 3.281;
  const math2 = inputField / 3.281;
  const math3 = inputField * 0.264;
  const math4 = inputField / 0.264;
  const math5 = inputField * 2.204;
  const math6 = inputField / 2.204;

  let doTheMath1 = `${inputField} meters = ${math1.toFixed(3)} feet | ${inputField} feet = ${math2.toFixed(3)} meters`;

  lengthConv.textContent = doTheMath1;

  let doTheMath2 = `${inputField} liters = ${math3.toFixed(3)} gallons | ${inputField} 
gallons = ${math4.toFixed(3)} liters`;

  volumeConv.textContent = doTheMath2;

  let doTheMath3 = `${inputField} kilograms = ${math5.toFixed(3)} pounds | ${inputField} 
pounds = ${math6.toFixed(3)} kilograms`;

  massConv.textContent = doTheMath3;
});
