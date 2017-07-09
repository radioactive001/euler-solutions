
  function multipleSum() {
    var result = 0;
    var limit = document.getElementById("inp1").value;


    for (var i = 0; i < limit; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        result += i;
      }

    }
    document.getElementById("out1").value=result;
  }
