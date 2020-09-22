function funcSumar() {
  var numero1 = document.getElementById('firstnumber').value;
  var numero2 = document.getElementById('secondnumber').value;
  var result = Number(numero1) + Number(numero2);
  ons.notification.toast('Suma es: ' + result, { timeout: 2000 });
}

function funcClear() {
  document.getElementById('firstnumber').value = '';
  document.getElementById('secondnumber').value = '';
}
