// jsChart
const ctx = document.getElementById("myPieChart").getContext("2d");
const chart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Loan Amount", "Interest", "Tenure", "EMI"],
    datasets: [
      {
        label: "EMI Calculator",
        data: [500000, 5, 1, 9436],
        backgroundColor: ["#3366cc", "#990099", "rgb(255, 153, 0)", "#673ab7"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "EMI Calculator Results",
    },
    plugins: {
      legend: {
        labels: {},
        position: "bottom",
        margin: 100,
        display: false,
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
  },
});

//update on change

function updateChart(loanAmount, interestPercentage, loanTenure, monthlyEMI) {
  chart.data.datasets[0].data = [
    loanAmount,
    interestPercentage,
    loanTenure,
    monthlyEMI,
  ];
  chart.update();
}

// jsChart

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
  player.setAttribute("src", "assets/video/final-video.mp4");
  if (player.hasAttribute("src")) {
    player.play();
    play.style.display = "none";
  }
});

// emi calc
// function reset() {
//   document.getElementById("value1").value = 0;
//   document.getElementById("value2").value = 0;
//   document.getElementById("value3").value = 0;

//   document.getElementById("monthly-interest").innerHTML = " $ " + 0;
//   document.getElementById("monthly-payment").innerHTML = " $ " + 0;
//   document.getElementById("total-repayment").innerHTML = " $ " + 0;
//   document.getElementById("total-interest").innerHTML = " $ " + 0;
// }

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

  // document.getElementById("monthly-interest").innerHTML = numeral(
  //   monthlyInterestAmount.toFixed(2)
  // ).format("	'($0,0)'");
  document.getElementById("monthly-payment").innerHTML = numeral(
    emi.toFixed(0)
  ).format("	'($0,0)'");
  document.getElementById("total-payment").innerHTML = numeral(
    totalRepayment.toFixed(0)
  ).format("	'($0,0)'");
  document.getElementById("total-interest").innerHTML = numeral(
    totalInterestCost.toFixed(2)
  ).format("	'($0,0)'");

  updateChart(loanAmount, interestRate, loanDurationMonths, emi);
}

for (let i = 0; i < inputNumbers.length; i++) {
  inputNumbers[i].addEventListener("keyup", () => {
    const formattedNumber = numeral(inputNumbers[i].value).format("0,0[.]0");
    inputNumbers[i].value = formattedNumber;
    inputRanges[i].value = formattedNumber;
    calculate();
  });

  inputRanges[i].addEventListener("input", () => {
    inputNumbers[i].value = numeral(inputRanges[i].value).format("0,0[.]0");
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

// form submit
// const enquiryForm = document.getElementById("requestQuoteForm");
// let enquiryForm_h1 = document.querySelector("h4.modal-title");

// enquiryForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const loanAmount = document.getElementById("loanAmount").value;
//   const mobile = document.getElementById("mobile").value;
//   const data = {
//     mobile,
//     loanAmount,
//   };
//   fetch("https://api.agify.io/?name=meelad").then((res) => {
//     if (res.status === 200) {
//       document
//         .getElementById("success-message")
//         .classList.remove("visually-hidden");
//       } else {
//         .getElementById("error-message")
//         .classList.remove("visually-hidden");
//       }
//   });
// });
// form submit

// bform
const enquiryForm = document.getElementById("requestQuoteForm");
let enquiryForm_h1 = document.querySelector("h4.modal-title");

enquiryForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validate user input
  const loanAmountInput = document
    .getElementById("loanAmount")
    .value.replaceAll(",", "");
  console.log(loanAmountInput);
  const mobileInput = document.getElementById("mobile");

  if (!validateLoanAmount(loanAmountInput)) {
    showError("Invalid loan amount. Please enter a valid amount.");
    return;
  }

  if (!validateMobileNumber(mobileInput.value)) {
    showError("Invalid mobile number. Please enter a 10-digit mobile number.");
    return;
  }

  const loanAmount = loanAmountInput;

  const mobile = mobileInput.value;

  const data = {
    mobile,
    loanAmount,
  };

  // Send data to the server using a secure POST request
  fetch("https://www.boredapi.com/api/activity", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status === 200) {
      document
        .getElementById("success-message")
        .classList.remove("visually-hidden");
      document.getElementById("error-message").classList.add("visually-hidden");
    } else {
      document
        .getElementById("error-message")
        .classList.remove("visually-hidden");
      document
        .getElementById("success-message")
        .classList.add("visually-hidden");
    }
  });
});

function validateLoanAmount(loanAmount) {
  if (isNaN(loanAmount) || parseInt(loanAmount) < 0) {
    return false;
  }
  return true;
}

function validateMobileNumber(mobileNumber) {
  if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
    return false;
  }
  return true;
}

function showError(errorMessage) {
  alert(errorMessage);
}

// bform


