function display(val) {
  document.getElementById("result").value += val;
  return val;
}
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
  return y;
}
function clearScreen() {
  document.getElementById("result").value = "";
}

const root = () => {
  let x = document.getElementById("result").value;
  let y = eval(x);
  let stuff = Math.pow(y, 0.5);
  document.getElementById("result").value = stuff;
};

const sine = () => {
  let x = document.getElementById("result").value;
  let y = eval(x);
  let inPi = y * (Math.PI / 180);
  let stuff = Math.sin(inPi);
  document.getElementById("result").value = stuff;
};

const cosine = () => {
  let x = document.getElementById("result").value;
  let y = eval(x);
  let inPi = y * (Math.PI / 180);
  let stuff = Math.cos(inPi);
  document.getElementById("result").value = stuff;
};

const tangent = () => {
  let x = document.getElementById("result").value;
  let y = eval(x);
  let inPi = y * (Math.PI / 180);
  let stuff = "";
  if (document.getElementById("result").value == 90) {
    stuff = "undefined";
  } else {
    stuff = Math.tan(inPi);
  }
  document.getElementById("result").value = stuff;
};
