function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "Steve Carell") {
    return true;
  } else if (x == "steve carell") {
    return true;
  } else if (x == "steve") {
    alert("I need his last name too!");
    return false;
  } else if (x == "Steve") {
    alert("I need his last name too!");
    return false;
  } else {
    alert("Wrong! (or maybe you misspelled her last name?)");
    return false;
  }
}

function validateForm2() {
  let x = document.forms["myForm2"]["fname2"].value;
  if (x == "pam beesly") {
    return true;
  } else if (x == "Pam Beesly") {
    return true;
  } else if (x == "pam") {
    alert("I need her last name too!");
    return false;
  } else if (x == "Pam") {
    alert("I need her last name too!");
    return false;
  } else {
    alert("Wrong! (or maybe you misspelled her last name?m)");
    return false;
  }
}

function validateForm3() {
  let x = document.forms["myForm3"]["fname3"].value;
  if (x == "Easy rider") {
    return true;
  } else if (x == "easy rider") {
    return true;
  } else {
    alert("Wrong!");
    return false;
  }
}

function validateForm4() {
  let x = document.forms["myForm4"]["fname4"].value;
  if (x == "Who would you do") {
    return true;
  } else if (x == "who would you do") {
    return true;
  } else if (x == "who'd you do") {
    return true;
  } else if (x == "Who'd you do") {
    return true;
  } else if (x == "whod you do") {
    return true;
  } else {
    alert("Wrong!");
    return false;
  }
}

function validateForm5() {
  let x = document.forms["myForm5"]["fname5"].value;
  if (x == "Henrietta") {
    return true;
  } else if (x == "henrietta") {
    return true;
  } else {
    alert("Wrong!");
    return false;
  }
}

function validateForm6() {
  let x = document.forms["myForm6"]["fname6"].value;
  if (x == "No") {
    return true;
  } else if (x == "no") {
    return true;
  } else {
    alert("Wrong!");
    return false;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function checkmark() {
  var x = document.getElementById("checkmark");
  if (x.style.display === "none") {
    x.style.display = "block";
    await sleep(1000);
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
