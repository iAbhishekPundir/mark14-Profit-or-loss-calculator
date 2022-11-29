const initialPrice = document.querySelector("#initial-price");
const noOfStocks = document.querySelector("#no-of-stocks");
const finalPrice = document.querySelector("#final-price");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#output");

checkBtn.addEventListener("click", clickHandler);

function calculateProfitLoss(initialPrice, noOfStocks, finalPrice) {
    if (finalPrice > initialPrice) {
        var profit = (finalPrice - initialPrice) * noOfStocks;
        var profitPercent = ((profit/(initialPrice*noOfStocks)) * 100).toFixed(2);
        result.innerText = `Congrats you made a profit of ${profit} and the profit percent is ${profitPercent}%.`
        result.style.color = "green";
    } else
    if (initialPrice > finalPrice) {
        var loss = (initialPrice - finalPrice) * noOfStocks;
        var lossPercent = ((loss/(initialPrice*initialPrice)) * 100).toFixed(2);
        result.innerText = `Oops! You made a loss of ${loss} and the loss percent is ${lossPercent}%.`
        result.style.color = "red";
    } else {
        result.innerText = "Neither a loss nor a profit."
        result.style.color = "blue";
    }
}

function clickHandler() {
    var iPrice = Number(initialPrice.value);
    var stocks = Number(noOfStocks.value);
    var fPrice = Number(finalPrice.value);
    if (iPrice == "" || iPrice <=0) {
        result.innerText = "Enter all the fields and should be > 0"
    } else if (stocks == "" || stocks <=0 ) {
        result.innerText = "Enter all the fields and should be > 0 "
    } else if (fPrice == "" || fPrice <=0) {
        result.innerText = "Enter all the fields and should be > 0"
    } else {
        calculateProfitLoss(iPrice, stocks, fPrice);
    }
}