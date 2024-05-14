let memory;
let longResult = "";
let numberEntered = false; //GPT HELP

function displayNum(num) {
  if (displayBar.value == 0) {
    displayBar.value = num;
  } else {
    displayBar.value += num;
  }

  numberEntered = true;
}
function clearResult() {
  displayBar.value = "0";
  longResult = "";
  numberEntered = false;
  memory = "";
  subDisplayBar.value = "";
}
function plus() {
  if (displayBar.value !== "") {
    memory = displayBar.value;
    if (numberEntered) {
      longResult += memory + "+";
    } else {
      longResult = longResult + (longResult !== "" ? "+" : "") + memory; //GPT HELP
    }
    subDisplayBar.value = longResult;

    numberEntered = false;
    displayBar.value = "";
  }
}
function minus() {
  if (displayBar.value !== "") {
    // GPT HELP ([+\-*\/] = equel to any math opartor. $= end of string)
    memory = displayBar.value;
    if (numberEntered) {
      longResult += memory + "-";
    } else {
      longResult = longResult + (longResult !== "" ? "-" : "") + memory;
    }
    subDisplayBar.value = longResult;

    numberEntered = false;
    displayBar.value = "";
  }
}
function devided() {
  if (displayBar.value !== "") {
    memory = displayBar.value;
    if (numberEntered) {
      longResult += memory + "/";
    } else {
      longResult = longResult + (longResult !== "" ? "/" : "") + memory;
    }
    subDisplayBar.value = longResult;

    numberEntered = false;
    displayBar.value = "";
  }
}

function multiply() {
  if (displayBar.value !== "") {
    memory = displayBar.value;
    if (numberEntered) {
      longResult += memory + "*";
    } else {
      longResult = longResult + (longResult !== "" ? "*" : "") + memory;
    }
    subDisplayBar.value = longResult;

    numberEntered = false;
    displayBar.value = "";
  }
}

function equels() {
  let expression = longResult + displayBar.value;
  displayBar.value = eval(expression);
  subDisplayBar.value = expression + "=" + displayBar.value; //GPT HELP
  longResult = "";
}
