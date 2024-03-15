function calculateSumOfOdds() {
  var min = parseInt(document.getElementById('min').value, 10);
  var max = parseInt(document.getElementById('max').value, 10);
  var sum = 0;
  var calculationProcess = '';
  // Start from the next odd number if min is even
  for (var i = (min % 2 === 0 ? min + 1 : min); i <= max; i += 2) {
    sum += i;
    calculationProcess += (calculationProcess ? ' + ' : '') + i;
  }
  document.getElementById('result').innerText = 'min = ' + min + ', max = ' + max + ', result = ' + sum;
  document.getElementById('calculationProcess').innerText = 'Calculation Process: ' + calculationProcess;
}
