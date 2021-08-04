// const ans = document.getElementsByClassName("ans");
// const three = document.getElementsByClassName("no-3");
// const two = document.getElementsByClassName("no-2");
// const one = document.getElementsByClassName("no-1");
// const plus = document.getElementsByClassName("plus");
// const six = document.getElementsByClassName("no-6");
// const five = document.getElementsByClassName("no-5");
// const seven = document.getElementsByClassName("no-7");
// const four = document.getElementsByClassName("no-4");
// const minus = document.getElementsByClassName("min");
// const zero = document.getElementsByClassName("no-0");
// const nine = document.getElementsByClassName("no-9");
// const eight = document.getElementsByClassName("no-8");
// const mul = document.getElementsByClassName("multi");
// const div = document.getElementsByClassName("dived");
// const ac = document.getElementsByClassName("clear");

// const buttons = document.getElementsByClassName("button");

// const length = buttons.length;

// for (i = 0; i < length; i++) {
//   button[i].addEventListener;
// }

/////////////////////////////////////////

const buttons = document.querySelectorAll("button");
console.log(buttons);
let textToDisplay = "";

buttons.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    if (btn.innerText === "=") {
      return onTotal();
    }
    if (btn.innerText === "AC") {
      return resetDisplay();
    }
    if (btn.innerText === "C") {
      textToDisplay = textToDisplay.slice(0, -1);
      return display(textToDisplay);
    }
    textToDisplay += btn.innerText;
    display(textToDisplay);
  });
});

const display = (toDisplay) => {
  const elm = document.getElementById("result");
  elm.innerText = toDisplay || 0 / 00;
};

const onTotal = () => {
  const total = eval(textToDisplay) + randomVal();
  textToDisplay = "";
  display(total);
};

const resetDisplay = () => {
  display("0.00");
  textToDisplay = "";
};

const randomVal = () => {
  const random = Math.floor(Math.random() * 100);
  return random < 3 ? random : 0;
};
