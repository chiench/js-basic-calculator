const input = document.querySelector("#display");
const btnAll = document.querySelectorAll(".btn");
const btnEqual = document.querySelector("#calculate");
const btnHistory = document.querySelector(".btn-history");
const btnCalculator = document.querySelector(".btn-calculator");
const container = document.querySelector(".container");
const calculationScreen = document.querySelector(".calculation-screen");
const historyScreen = document.querySelector(".history-screen");
const ulHistoryList = document.querySelector(".history-list");

const btnOperator = ["+", "-", "*", "/", "%", "."];
const btnNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const logCalculation = [];

let valueToFill = "";

btnAll.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        console.log("event: ", event.target.innerHTML);
        if (event.target.innerHTML === "=") {
            return;
        } else if (event.target.innerHTML === "CA") {
            valueToFill = "";
            input.value = "";
        } else if (event.target.innerHTML === "DEL") {
            console.log("valueToFill: ", valueToFill);
            valueToFill = valueToFill.slice(0, -1);
            input.value = valueToFill;
        } else {
            valueToFill = valueToFill + event.target.innerHTML;
            const lastCharacter = valueToFill.charAt(valueToFill.length - 1);
            const lastSecondCharacter = valueToFill.charAt(
                valueToFill.length - 2
            );
            if (
                btnOperator.includes(event.target.innerHTML) &&
                btnOperator.includes(lastCharacter) &&
                btnOperator.includes(lastSecondCharacter)
            ) {
                valueToFill = valueToFill.slice(0, -2) + event.target.innerHTML;
                input.value = valueToFill;
            } else if (
                btnOperator.includes(event.target.innerHTML) &&
                valueToFill.length === 1
            ) {
                valueToFill = "";
                input.value = "";
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
    } else if (valueToFill === "") {
        console.warn("Please enter a valid expression");
    } else {
        logCalculation.push(valueToFill);
        valueToFill = eval(valueToFill);
        input.value = valueToFill;
    }
});
btnHistory.addEventListener("click", function () {
    historyScreen.classList.remove("hidden");
    calculationScreen.classList.add("hidden");

    if (logCalculation.length === 0) {
        const li = document.createElement("li");
        li.className = "history-item-empty";
        li.innerHTML = "No history found";
        ulHistoryList.appendChild(li);
    }
    logCalculation.forEach(function (log) {
        const li = document.createElement("li");
        li.className = "history-item";
        li.innerHTML = `${log} = ${eval(log)}`;
        ulHistoryList.appendChild(li);
    });
});
btnCalculator.addEventListener("click", function () {
    historyScreen.classList.add("hidden");
    calculationScreen.classList.remove("hidden");
    valueToFill = "";
    input.value = "";
    ulHistoryList.innerHTML = "";
});
