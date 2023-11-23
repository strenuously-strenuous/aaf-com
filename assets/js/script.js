// interação do botão de autoriazação do formulário

// function activeBox() {
//   if ($(".form label .box").hasClass("active")) {
//     $(".form label .box").removeClass("active");
//   } else {
//     $(".form label .box").addClass("active");
//   }
// }

// $(".form label .box").on("click", function () {
//   activeBox();
// });

// $(".form label sup").on("click", function () {
//   activeBox();
// });

// interação do botão de autoriazação do formulário FIM

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
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

function calculation() {
  var loanAmount = document.getElementById("value1").value;
  var interestRate = document.getElementById("value2").value;
  var loanDuration = document.getElementById("value3").value;

  //.......... declarations.............

  var interestPerYear = (loanAmount * interestRate) / 100;
  var monthlyInterest = interestPerYear / 12;

  var monthlyPayment = monthlyInterest + loanAmount / loanDuration;
  var totalInterestCost = monthlyInterest * loanDuration;
  var totalRepayment = monthlyPayment * loanDuration;

  //----------------monthly interest----------------------

  document.getElementById("monthly-interest").innerHTML =
    " $ " + monthlyInterest.toFixed(2);

  //-------------Monthly payment------------

  document.getElementById("monthly-payment").innerHTML =
    " $ " + monthlyPayment.toFixed(2);

  //-------------Total repayment-----------

  document.getElementById("total-repayment").innerHTML =
    " $ " + totalRepayment.toFixed(2);

  //--------------Total Interest cost----------------

  document.getElementById("total-interest").innerHTML =
    " $ " + totalInterestCost.toFixed(2);
}
// emi calc
