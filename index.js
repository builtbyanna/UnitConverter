/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthConv = document.getElementById("length-el");
const volumeConv = document.getElementById("volume-el");
const massConv = document.getElementById("mass-el");
const convertBtn = document.getElementById("convert-btn");

/*convertBtn.addEventListener("click", function () {
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
  });*/

//REFACTORED CODE

const inputField = document.getElementById("input");

//selects everything in input field when clicking ("focus")
inputField.addEventListener("focus", function() {
  inputField.select()
})

//function to DRY
function convertMath(value, unit1, unit2, rate) {
  const imperial = (value * rate).toFixed(3);
  const metric = (value / rate).toFixed(3);

  return `${value} ${unit1} = ${imperial} ${unit2} | ${value} ${unit2} = ${metric} ${unit1}`;
}

convertBtn.addEventListener("click", function () {
  const value = Number(inputField.value); //uses variable: value to calculate with whatever user types in

  if (!value && value !== 0) {
    alert("please enter a valid number")
    return 
  }
  

  lengthConv.textContent = convertMath(value, "meter", "feet", 3.281);
  volumeConv.textContent = convertMath(value, "liters", "gallons", 0.264);
  massConv.textContent = convertMath(value, "kilograms", "pounds", 2.204);
});
