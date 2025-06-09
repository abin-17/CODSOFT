const display = document.getElementById('display');
const answer = document.getElementById('answer');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
  answer.innerText = '0';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(display.value);
    answer.innerText = result;
  } catch {
    answer.innerText = 'Error';
  }
}
