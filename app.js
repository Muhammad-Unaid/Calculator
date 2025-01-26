
function clearResult() {
  document.getElementById('result').value = '';
}

function backspace() {
  let result = document.getElementById('result');
  result.value = result.value.slice(0, -1);
}

function insertNumber(number) {
  document.getElementById('result').value += number;
}

function insertSymbol(symbol) {
  document.getElementById('result').value += symbol;
}

function calculate() {
  try {
    let result = document.getElementById('result');
    result.value = eval(result.value);
  } catch (error) {
    alert('Invalid calculation!');
  }
}
