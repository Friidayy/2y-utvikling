let result = document.getElementById("result");

function insertDigit(digit) {
  result.value += digit;
}

function insertOperator(operator) {
  result.value += " " + operator + " ";
}

function insertDecimal() {
  if (!result.value.includes(".")) {
    result.value += ".";
  }
}

function clearResult() {
  result.value = "";
}

function deleteDigit() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  result.value = eval(result.value);
}
