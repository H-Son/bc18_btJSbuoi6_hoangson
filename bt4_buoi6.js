function ketquabt4() {
  var result_bt4El = document.querySelectorAll(".bt4");
  for (var i = 0; i <= 10; i++) {
    if ((i + 1) % 2 == 0) {
      result_bt4El[i].style.backgroundColor = "red";
    } else {
      result_bt4El[i].style.backgroundColor = "blue";
    }
  }
}
