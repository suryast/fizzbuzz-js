function fizzbuzz(int) {
  if (evaluateThree(int) && evaluateFive(int)) {
    return isFizz() + isBuzz();
  } else if (evaluateFive(int)) {
    return isBuzz();
  } else if (evaluateThree(int)) {
    return isFizz();
  } else {
    return int;
  }
}

function evaluateThree(input) {
  return input % 3 === 0 && notZero(input) ? true : false;
}

function evaluateFive(input) {
  return input % 5 === 0 && notZero(input) ? true : false;
}

function notZero(input) {
  return input !== 0 ? true : false;
}

function isFizz() {
  return "fizz";
}

function isBuzz() {
  return "buzz";
}


export { fizzbuzz };
