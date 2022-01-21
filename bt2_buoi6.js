function ketquabt2() {
  var bt2xValue = document.getElementById("bt2x").value * 1;
  var bt2nValue = document.getElementById("bt2n").value * 1;
  var S = 0;
  for (var i = 1; i <= bt2nValue; i++) {
    S += Math.pow(bt2xValue, i);
  }
  document.getElementById("result_bt2").innerText = S;
}
