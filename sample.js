function numberOfHalves(n) {
    var count = 0;
    while (n > 1) {
      n /= 2;
      count++;
    }
    return count;
  }

  function totalNumberOfHalves(n) {
    var total = 0;
    for (var i = 0; i < n; i++) {
      total += numberOfHalves(n);
    }
    return total;
  }

  console.log(numberOfHalves(10))

  console.log(numberOfHalves(20))

  console.log(numberOfHalves(40))

  console.log(numberOfHalves(100))

  console.log(totalNumberOfHalves(10))

  console.log(totalNumberOfHalves(20))

  console.log(totalNumberOfHalves(40))

  console.log(totalNumberOfHalves(100))