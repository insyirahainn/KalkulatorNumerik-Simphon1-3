function calculate() {
    let number1 = parseFloat(document.getElementById('number1').value) || 0;
    let number2 = parseFloat(document.getElementById('number2').value) || 0;

    let result = number1 + number2;

    document.getElementById('result').innerText = result;
}
