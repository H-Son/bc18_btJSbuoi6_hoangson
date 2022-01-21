function ketqua() {
  var a = 0;
  var i = 0;
  while (a < 10000) {
    i++;

    a = a + i;
  }
  document.getElementById("result_bt1").innerText = i;
}
