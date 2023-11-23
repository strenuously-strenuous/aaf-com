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
