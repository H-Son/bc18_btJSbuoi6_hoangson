function ketquabt3() {
  var bt3nValue = document.getElementById("bt3n").value * 1;
  var S = 1;
  for (var i = 1; i <= bt3nValue; i++) {
    S *= i;
  }
  document.getElementById("result_bt3").innerText = S;
}
