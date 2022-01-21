function ktraSNT(n) {
  if (n < 2) {
    return false;
  } else {
    var count = 0;
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        count += 1;
      }
    }

    if (count == 0) {
      return true;
    } else {
      return false;
    }
  }
}

function ketquabt5() {
  var bt5nValue = document.getElementById("bt5n").value * 1;

  var SNT = "";
  for (var j = 2; j <= bt5nValue; j++) {
    if (ktraSNT(j)) {
      SNT += j + " ";
    }
  }
  document.getElementById("result_bt5").innerText = SNT;
}
