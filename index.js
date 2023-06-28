//making some variables to make the rest of the code easier to navigate
let check = document.getElementById("calc");
let input = document.getElementById("fromInput");
let output = document.getElementById("output");

let unit1 = document.getElementById("unit1");
let unit2 = document.getElementById("unit2");
//If someone "clicks" the button run the convert function
check.addEventListener("click", convert);
//The convert function looks at what units are selected,
//then does a simple calculation and outs the answer in the oteher text field
function convert() {
  let x = input.value;
  let result = 0;
  if (unit1.value === "Meters" && unit2.value === "Feet") {
    result = x * 3.2808399;
    output.value = result;
  } else if (unit1.value === "Meters" && unit2.value === "Lightyears") {
    result = x * 0.0000000000000001057;
    output.value = result;
  } else if (unit1.value === "Feet" && unit2.value === "Meters") {
    result = x / 3.2808399;
    output.value = result;
  } else if (unit1.value === "Feet" && unit2.value === "Lightyears") {
    result = x * 0.000000000000000032217;
    output.value = result;
  } else if (unit1.value === "Lightyears" && unit2.value === "Meters") {
    result = x / 0.0000000000000001057;
    output.value = result;
  } else if (unit1.value === "Lightyears" && unit2.value === "Feet") {
    result = x / 0.000000000000000032217;
    output.value = result;
  } else if (unit1.value === unit2.value) {
    document.getElementById("error").style.display = "block";
  } else {
    //Just in case
    alert("Unknown error");
  }
}
