const ctx = document.getElementById("myPieChart").getContext("2d"),
  chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Loan Amount", "Interest", "Tenure", "EMI"],
      datasets: [
        {
          label: "EMI Calculator",
          data: [5e5, 5, 1, 9436],
          backgroundColor: [
            "#3366cc",
            "#990099",
            "rgb(255, 153, 0)",
            "#673ab7",
          ],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      responsive: !0,
      title: { display: !0, text: "EMI Calculator Results" },
      plugins: {
        legend: { labels: {}, position: "bottom", margin: 100, display: !1 },
      },
      layout: { padding: { left: 10, right: 10, top: 10, bottom: 10 } },
    },
  });
function updateChart(e, t, n, a) {
  (chart.data.datasets[0].data = [e, t, n, a]), chart.update();
}
let btnF = document.querySelector("#requestQuoteButton"),
  btnF2 = document.querySelector("#requestQuoteButton2"),
  btnFClose = document.querySelector("#btn-fclose"),
  form = document.querySelector("#modal1");
function t01() {
  $("#form-carousel").owlCarousel({
    loop: !0,
    margin: 10,
    nav: !1,
    dots: !1,
    autoplayTimeout: 2e3,
    autoplay: !0,
    responsive: { 0: { items: 4 } },
  });
}
btnF.addEventListener("click", function (e) {
  e.preventDefault(), form.classList.remove("visually-hidden"), t01();
}),
  btnF2.addEventListener("click", function (e) {
    e.preventDefault(), form.classList.remove("visually-hidden"), t01();
  }),
  btnFClose.addEventListener("click", function (e) {
    e.preventDefault(), form.classList.add("visually-hidden");
  }),
  ($.fn.jQuerySimpleCounter = function (e) {
    var t = $.extend(
        { start: 0, end: 100, easing: "swing", duration: 400, complete: "" },
        e
      ),
      n = $(this);
    $({ count: t.start }).animate(
      { count: t.end },
      {
        duration: t.duration,
        easing: t.easing,
        step: function () {
          var e = Math.ceil(this.count);
          n.text(e);
        },
        complete: t.complete,
      }
    );
  }),
  $("#count-1").jQuerySimpleCounter({ end: 3e3, duration: 3e3 }),
  $("#count-2").jQuerySimpleCounter({ end: 2e3, duration: 3e3 }),
  $("#count-3").jQuerySimpleCounter({ end: 20, duration: 3e3 }),
  $("#count-4").jQuerySimpleCounter({ end: 100, duration: 3e3 }),
  $(".owl-01").owlCarousel({
    loop: !0,
    margin: 10,
    nav: !0,
    autoplay: !0,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1200: { items: 3 },
      1400: { items: 4 },
    },
  }),
  $(".owl-02").owlCarousel({
    loop: !0,
    autoplay: !0,
    margin: 10,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1200: { items: 3 },
      1400: { items: 4 },
    },
  });
let wabtn_wrapper = document.querySelector("#cta-fixed");
window.addEventListener("scroll", function () {
  window.scrollY > 300
    ? wabtn_wrapper.classList.remove("visually-hidden")
    : window.scrollY < 300 && wabtn_wrapper.classList.add("visually-hidden");
});
let player = document.getElementById("player"),
  play = document.getElementById("play");
play.addEventListener("click", function () {
  player.setAttribute("src", "assets/video/final-video.mp4"),
    player.hasAttribute("src") &&
      (player.play(), (play.style.display = "none"));
});
const inputNumbers = document.querySelectorAll(".input-number"),
  inputRanges = document.querySelectorAll(".input-range");
function updateRangeValues() {
  let e = document.getElementById("amount-range"),
    t = document.getElementById("customRange1"),
    n = document.getElementById("customRange1");
  (e.value = document.getElementById("loan-amount").value.replaceAll(",", "")),
    (t.value = document.getElementById("interest-rate").value),
    (n.value = document.getElementById("loan-tenure").value),
    (document.getElementById("loan-amount").value = numeral(e.value).format(
      "0,0"
    )),
    (document.getElementById("interest-rate").value = t.value),
    (document.getElementById("loan-tenure").value = n.value);
}
function calculate() {
  let e = parseFloat(
      document.getElementById("loan-amount").value.replaceAll(",", "")
    ),
    t = parseFloat(document.getElementById("interest-rate").value),
    n = 12 * parseFloat(document.getElementById("loan-tenure").value),
    a = t / 1200,
    l = (e * a * Math.pow(1 + a, n)) / (Math.pow(1 + a, n) - 1);
  (document.getElementById("monthly-payment").innerHTML = numeral(
    l.toFixed(0)
  ).format("	'($0,0)'")),
    (document.getElementById("total-payment").innerHTML = numeral(
      (l * n).toFixed(0)
    ).format("	'($0,0)'")),
    (document.getElementById("total-interest").innerHTML = numeral(
      (l * n - e).toFixed(2)
    ).format("	'($0,0)'")),
    updateChart(e, t, n, l);
}
for (let i = 0; i < inputNumbers.length; i++)
  inputNumbers[i].addEventListener("keyup", () => {
    let e = numeral(inputNumbers[i].value).format("0,0[.]0");
    (inputNumbers[i].value = e), (inputRanges[i].value = e), calculate();
  }),
    inputRanges[i].addEventListener("input", () => {
      (inputNumbers[i].value = numeral(inputRanges[i].value).format("0,0[.]0")),
        calculate();
    });
document.querySelectorAll(".emi input").forEach((e) => {
  e.addEventListener("keypress", () => {
    calculate();
  });
}),
  updateRangeValues(),
  calculate();
const enquiryForm = document.getElementById("requestQuoteForm");
let enquiryForm_h1 = document.querySelector("h4.modal-title");
function validateLoanAmount(e) {
  return !(isNaN(e) || 0 > parseInt(e));
}
function validateMobileNumber(e) {
  return !(10 !== e.length || isNaN(e));
}
function showError(e) {
  alert(e);
}
enquiryForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let t = document.getElementById("loanAmount").value.replaceAll(",", "");
  console.log(t);
  let n = document.getElementById("mobile");
  if (!validateLoanAmount(t)) {
    showError("Invalid loan amount. Please enter a valid amount.");
    return;
  }
  if (!validateMobileNumber(n.value)) {
    showError("Invalid mobile number. Please enter a 10-digit mobile number.");
    return;
  }
  let a = n.value;
  fetch("https://www.boredapi.com/api/activity", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mobile: a, loanAmount: t }),
  }).then((e) => {
    200 === e.status
      ? (document
          .getElementById("success-message")
          .classList.remove("visually-hidden"),
        document
          .getElementById("error-message")
          .classList.add("visually-hidden"))
      : (document
          .getElementById("error-message")
          .classList.remove("visually-hidden"),
        document
          .getElementById("success-message")
          .classList.add("visually-hidden"));
  });
});

//  main form

const mainForm = document.getElementById("main-form");

mainForm.addEventListener("submit", function (e) {
  e.preventDefault();

  function showError(e) {
    alert(e);
  }

  const selectedRadio = document.querySelector(
    'input[name="loan-type"]:checked'
  );
  
  if (selectedRadio) {
    const selectedValue = selectedRadio.value;
    console.log(selectedValue); // This will print the value of the selected radio button
  } else {
    console.log("No radio button selected");
  }

  let fname = document.querySelector('input[name="firstname"]').value;
  let lname = document.querySelector('input[name="lastname"]').value;
  let email = document.querySelector('input[name="email"]').value;
  let mobile = document.querySelector('input[name="mobile"]').value;
  let loanAmount = document.querySelector('input[name="loan-amount"]').value;
  let pincode = document.querySelector('input[name="pincode"]').value;

  console.log(selectedRadio.value, fname, lname, email, mobile, loanAmount, pincode);

  if (!validateLoanAmount(loanAmount)) {
    showError("Invalid loan amount. Please enter a valid amount.");
    return;
  }
  if (!validateMobileNumber(mobile.value)) {
    showError("Invalid mobile number. Please enter a 10-digit mobile number.");
    return;
  }
  let a = n.value;
  fetch("https://www.boredapi.com/api/activity", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      loantype: selectedRadio.value,
      fname: fname,
      lname: lname,
      email: email,
      mobile: mobile,
      loanAmount: loanAmount,
      pincode: pincode,
    }),
  }).then((e) => {
    200 === e.status
      ? (document
          .getElementById("success-message")
          .classList.remove("visually-hidden"),
        document
          .getElementById("error-message")
          .classList.add("visually-hidden"))
      : (document
          .getElementById("error-message")
          .classList.remove("visually-hidden"),
        document
          .getElementById("success-message")
          .classList.add("visually-hidden"));
  });
});
