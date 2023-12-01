// cd bar
// const inputNumbers = document.querySelectorAll(".input-number");
// const inputRanges = document.querySelectorAll(".input-range");

// Add event listeners to all input number and range elements
// for (let i = 0; i < inputNumbers.length; i++) {
//   inputNumbers[i].addEventListener("keyup", () => {
//     const formattedNumber = parseFloat(inputNumbers[i].value).toLocaleString();
//     inputNumbers[i].value = numeral(formattedNumber).format("0,0");
//     inputRanges[i].value = inputNumbers[i].value;
//   });

//   inputRanges[i].addEventListener("input", () => {
//     inputNumbers[i].value = numeral(inputRanges[i].value).format("0,0");
//   });
// }
// cd bar

let btnF = document.querySelector("#requestQuoteButton");
let btnF2 = document.querySelector("#requestQuoteButton2");
let btnFClose = document.querySelector("#btn-fclose");
let form = document.querySelector("#modal1");

btnF.addEventListener("click", function (e) {
  e.preventDefault();
  form.classList.remove("visually-hidden");
  t01();
});
btnF2.addEventListener("click", function (e) {
  e.preventDefault();
  form.classList.remove("visually-hidden");
  t01();
});
btnFClose.addEventListener("click", function (e) {
  e.preventDefault();
  form.classList.add("visually-hidden");
});

function t01() {
  $("#form-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplayTimeout: 2000,
    autoplay: true,
    responsive: {
      0: {
        items: 4,
      },
    },
  });
}

// no counter

$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend(
    {
      start: 0,
      end: 100,
      easing: "swing",
      duration: 400,
      complete: "",
    },
    options
  );

  var thisElement = $(this);

  $({ count: settings.start }).animate(
    { count: settings.end },
    {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete,
    }
  );
};

$("#count-1").jQuerySimpleCounter({ end: 3000, duration: 3000 });
$("#count-2").jQuerySimpleCounter({ end: 2000, duration: 3000 });
$("#count-3").jQuerySimpleCounter({ end: 20, duration: 3000 });
$("#count-4").jQuerySimpleCounter({ end: 100, duration: 3000 });

// no counter

$(".owl-01").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
    1400: {
      items: 4,
    },
  },
});

$(".owl-02").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
    1400: {
      items: 4,
    },
  },
});

let wabtn_wrapper = document.querySelector("#cta-fixed");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    wabtn_wrapper.classList.remove("visually-hidden");
  } else if (window.scrollY < 300) {
    wabtn_wrapper.classList.add("visually-hidden");
  }
});

let player = document.getElementById("player");
let play = document.getElementById("play");

play.addEventListener("click", function () {
  player.play();
  play.style.display = "none";
});

// emi calc
function reset() {
  document.getElementById("value1").value = 0;
  document.getElementById("value2").value = 0;
  document.getElementById("value3").value = 0;

  document.getElementById("monthly-interest").innerHTML = " $ " + 0;
  document.getElementById("monthly-payment").innerHTML = " $ " + 0;
  document.getElementById("total-repayment").innerHTML = " $ " + 0;
  document.getElementById("total-interest").innerHTML = " $ " + 0;
}

// calculation();

// document.querySelectorAll(".emi input").forEach((item) => {
//   item.addEventListener("keypress", (event) => {
//     calculation();
//   });
// });

// function calculation() {
//   // debugger;
//   var loanAmount = document
//     .getElementById("loan-amount")
//     .value.replaceAll(",", "");
//   var interestRate = document.getElementById("interest-rate").value;
//   var loanDuration = document.getElementById("loan-tenure").value;

//   //.......... declarations.............

//   var interestPerYear = (loanAmount * interestRate) / 100;
//   var monthlyInterest = interestPerYear / 12;

//   var monthlyPayment = monthlyInterest + loanAmount / loanDuration;
//   var totalInterestCost = monthlyInterest * loanDuration;
//   var totalRepayment = monthlyPayment * loanDuration;

//   //----------------monthly interest----------------------

//   document.getElementById("monthly-interest").innerHTML = Math.ceil(
//     monthlyInterest.toFixed(2)
//   );

//   //-------------Monthly payment------------

//   document.getElementById("monthly-payment").innerHTML = Math.ceil(
//     monthlyPayment.toFixed(2)
//   );

//   //-------------Total repayment-----------

//   document.getElementById("total-payment").innerHTML = Math.ceil(
//     totalRepayment.toFixed(2)
//   );

//   //--------------Total Interest cost----------------

//   document.getElementById("total-interest").innerHTML = Math.ceil(
//     totalInterestCost.toFixed(2)
//   );

// var data = google.visualization.arrayToDataTable([
//   ["Loan", "Loan Breakup"],
//   ["Loan Amount", loanAmount],
//   ["Interest Rate", interestRate],
//   ["Loan Tenure", loanDuration],
//   ["Total Payment", totalRepayment.toFixed(2)],
//   ["Total Interest", totalInterestCost.toFixed(2)],
// ]);

// chart.draw(data);

// function drawVisualization() {
//   var wrapper = new google.visualization.ChartWrapper({
//     chartType: "ColumnChart",
//     dataTable: [
//       [ "Germany", "USA", "Brazil"],
//       [ loanAmount, loanAmount, loanAmount],
//     ],
//     options: { title: "Countries" },
//     containerId: "myPieChart",
//   });
//   wrapper.draw();
// }

// drawVisualization();
// }
// emi calc

//

// var chart = new google.visualization.ChartWrapper({
//   chartType: "donut",
//   containerId: "myPieChart",
//   dataTable: [
//     ["Loan", "Loan Breakup"],
//     ["Loan Amount", 10],
//     ["Interest Rate", 10],
//     ["Loan Tenure", 10],
//     ["Total Payment", 10],
//     ["Total Interest", 60],
//   ],
//   options: {
//     height: 300,
//     width: 500,
//     pieHole: 0.4,
//     pieSliceText: "label",
//     pieSliceTextStyle: {
//       color: "black",
//     },
//     legend: "none",
//   },
// });
// chart.draw();

// t01
// for (let i = 0; i < inputNumbers.length; i++) {
//   inputNumbers[i].addEventListener("keyup", () => {
//     const formattedNumber = numeral(inputNumbers[i].value).format("0,0");
//     inputNumbers[i].value = formattedNumber;
//     inputRanges[i].value = formattedNumber;
//     calculation();
//   });

//   inputRanges[i].addEventListener("input", () => {
//     inputNumbers[i].value = numeral(inputRanges[i].value).format("0,0");
//     calculation();
//   });
// }

// document.querySelectorAll(".emi input").forEach((item) => {
//   item.addEventListener("keypress", () => {
//     calculation();
//   });
// });

// function calculation() {
//   // Get input values
//   const loanAmount = parseFloat(
//     document.getElementById("loan-amount").value.replaceAll(",", "")
//   );
//   const interestRate = parseFloat(
//     document.getElementById("interest-rate").value
//   );
//   const loanDuration =
//     parseFloat(document.getElementById("loan-tenure").value) / 12;

//   console.log(loanDuration);

//   // Calculate financial values
//   const interestPerYear = (loanAmount * interestRate) / 100;
//   const monthlyInterest = interestPerYear / 12;
//   const monthlyPayment = monthlyInterest + loanAmount / loanDuration;
//   const totalInterestCost = monthlyInterest * loanDuration;
//   const totalRepayment = monthlyPayment * loanDuration;

//   // ---------------- monthly interest ----------------------

//   // document.getElementById("monthly-interest").innerHTML = Math.ceil(
//   //   monthlyInterest.toFixed(2)
//   // );

//   // // ------------- Monthly payment ------------

//   // document.getElementById("monthly-payment").innerHTML = Math.ceil(
//   //   monthlyPayment.toFixed(2)
//   // );
//   // // ------------- Total repayment -----------

//   // document.getElementById("total-payment").innerHTML = Math.ceil(
//   //   totalRepayment.toFixed(2)
//   // );

//   // // -------------- Total Interest cost --------------

//   // document.getElementById("total-interest").innerHTML = Math.ceil(
//   //   totalInterestCost.toFixed(2)
//   // );

//   //   // Format and display results
//   document.getElementById("monthly-interest").innerHTML = numeral(
//     monthlyInterest.toFixed(2)
//   ).format("Rs.0,0");
//   document.getElementById("monthly-payment").innerHTML = numeral(
//     monthlyPayment.toFixed(2)
//   ).format("Rs.0,0");
//   document.getElementById("total-payment").innerHTML = numeral(
//     totalRepayment.toFixed(2)
//   ).format("Rs.0,0");
//   document.getElementById("total-interest").innerHTML = numeral(
//     totalInterestCost.toFixed(2)
//   ).format("Rs.0,0");
// }

// t01

// to2

// const numeral = require('numeral');

const inputNumbers = document.querySelectorAll(".input-number");
const inputRanges = document.querySelectorAll(".input-range");

function updateRangeValues() {
  const loanAmountRange = document.getElementById("amount-range");
  const interestRateRange = document.getElementById("customRange1");
  const loanTenureRange = document.getElementById("customRange1");

  loanAmountRange.value = document
    .getElementById("loan-amount")
    .value.replaceAll(",", "");
  interestRateRange.value = document.getElementById("interest-rate").value;
  loanTenureRange.value = document.getElementById("loan-tenure").value;

  document.getElementById("loan-amount").value = numeral(
    loanAmountRange.value
  ).format("0,0");
  document.getElementById("interest-rate").value = interestRateRange.value;
  document.getElementById("loan-tenure").value = loanTenureRange.value;
}

function calculate() {
  const loanAmount = parseFloat(
    document.getElementById("loan-amount").value.replaceAll(",", "")
  );
  const interestRate = parseFloat(
    document.getElementById("interest-rate").value
  );
  const loanDurationMonths =
    parseFloat(document.getElementById("loan-tenure").value) * 12;

  const monthlyInterestRate = interestRate / (12 * 100);

  const emi =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, loanDurationMonths)) /
    (Math.pow(1 + monthlyInterestRate, loanDurationMonths) - 1);

  const totalInterestCost = emi * loanDurationMonths - loanAmount;
  const totalRepayment = emi * loanDurationMonths;

  const monthlyInterestAmount = emi * monthlyInterestRate;

  document.getElementById("monthly-interest").innerHTML = numeral(
    monthlyInterestAmount.toFixed(2)
  ).format("	'($0,0)'");
  document.getElementById("monthly-payment").innerHTML = numeral(
    emi.toFixed(0)
  ).format("	'($0,0)'");
  document.getElementById("total-payment").innerHTML = numeral(
    totalRepayment.toFixed(0)
  ).format("	'($0,0)'");
  document.getElementById("total-interest").innerHTML = numeral(
    totalInterestCost.toFixed(2)
  ).format("	'($0,0)'");
}

// Update input values and trigger calculation on change
// ["keyup", "input"].forEach((event) => {
//   for (const [i, input] of [...inputNumbers, ...inputRanges].entries()) {
//     input.addEventListener(event, () => {
//       const formattedNumber = numeral(input.value).format("0,0");

//       if (input.type === "range") {
//         inputNumbers[i].value = formattedNumber;
//         calculate();
//       } else {
//         input.value = formattedNumber;
//         inputRanges[i].value = formattedNumber;
//         calculate();
//       }
//     });
//   }
// });

for (let i = 0; i < inputNumbers.length; i++) {
  inputNumbers[i].addEventListener("keyup", () => {
    const formattedNumber = numeral(inputNumbers[i].value).format("0,0");
    inputNumbers[i].value = formattedNumber;
    inputRanges[i].value = formattedNumber;
    calculate();
  });

  inputRanges[i].addEventListener("input", () => {
    inputNumbers[i].value = numeral(inputRanges[i].value).format("0,0");
    calculate();
  });
}

document.querySelectorAll(".emi input").forEach((item) => {
  item.addEventListener("keypress", () => {
    calculate();
  });
});

// Update range slider values on page load
updateRangeValues();

// Calculate initial values
calculate();

// to2
