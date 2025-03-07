const btnAll = document.querySelectorAll(".btn");
const btnEqual = document.querySelector("#calculate");
const btnHistory = document.querySelector(".btn-history");
const container = document.querySelector(".container");
const calculationScreen = document.querySelector(".calculation-screen");

const btnOperator = ["+", "-", "*", "/"];
const btnNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const logCalculation = [];
console.log("btnOperator: ", btnOperator);
console.log("btnAll: ", btnAll);
const input = document.querySelector("#display");

let valueToFill = "";

btnAll.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    console.log("event: ", event.target.innerHTML);
    if (event.target.innerHTML === "=") {
      console.log(2);
    } else if (event.target.innerHTML === "CA") {
      valueToFill = "";
      input.value = "";
    } else if (event.target.innerHTML === "DEL") {
      console.log("valueToFill: ", valueToFill);
      valueToFill = valueToFill.slice(0, -1);
      input.value = valueToFill;
    } else {
      valueToFill = valueToFill + event.target.innerHTML;
      console.log("valueToFill: ", valueToFill);
      const lastCharacter = valueToFill.charAt(valueToFill.length - 1);
      const lastSecondCharacter = valueToFill.charAt(valueToFill.length - 2);
      console.log("lastCharacter: ", lastCharacter);
      console.log("lastSecondCharacter: ", lastSecondCharacter);
      if (
        btnOperator.includes(event.target.innerHTML) &&
        btnOperator.includes(lastCharacter) &&
        btnOperator.includes(lastSecondCharacter)
      ) {
        valueToFill = valueToFill.slice(0, -2) + event.target.innerHTML;
        input.value = valueToFill;
      } else {
        input.value = valueToFill;
      }
    }
  });
});
btnEqual.addEventListener("click", function () {
  console.log("valueToFill: ", valueToFill);
  if (btnOperator.includes(valueToFill.charAt(valueToFill.length - 1))) {
    console.warn("Please enter a valid expression");
  } else {
    logCalculation.push(valueToFill);
    valueToFill = eval(valueToFill);
    input.value = valueToFill;
  }
});
btnHistory.addEventListener("click", function () {
  calculationScreen.style.visibility = "hidden";

  container.innerHTML = `
  <div class="history-screen">  
    <div class="title">
                <h2>History</h2>
                <button class="btn-calculator">
                    <i class="fa-solid fa-calculator"></i>
                    Máy tính</button>
        </div>
        <ul class="history-list">
                
        </ul>
     </div>
    `;
  const btnCalculator = document.querySelector(".btn-calculator");
  const historyScreen = document.querySelector(".history-screen");
  btnCalculator.addEventListener("click", function () {
    historyScreen.style.visibility = "hidden";
    calculationScreen.style.visibility = "visible";
    input.value = "";
    valueToFill = "";
  });
  const ulEl = document.querySelector(".history-list");

  logCalculation.forEach(function (calculation) {
    let li = document.createElement("li");

    li.className = "history-item";
    // Tạo nội dung bên trong
    li.innerHTML = `${calculation}`;
    ulEl.appendChild(li);
  });
});
