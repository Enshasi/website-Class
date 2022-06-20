// //show The Navbar
// let button = document.querySelector('.header i');
// let navbar = document.querySelector('.navbar');

// button.onclick = function () {
//     navbar.classList.toggle('open');
// }

$(".header i").on("click", function() {
    $(".navbar").toggleClass("open");
});

// $('.projects .link  > span ').on('click', function() {
//     console.log(this.dataset('img'))
// })
let abd = document.querySelectorAll(".projects .link  > span ");
let images = document.querySelectorAll(".projects .image > div > img  ");

abd.forEach((span) => {
    span.addEventListener("click", (el) => {
        abd.forEach((e) => {
            e.classList.remove("active");
        });
        el.target.classList.add("active");

        images.forEach((imgs) => {
            imgs.style.display = "none";
        });
        document.querySelectorAll(el.target.dataset.img).forEach((el) => {
            el.style.display = "block";
        });
    });
});
let linkes = document.querySelectorAll(".navbar li a");
linkes.forEach((link) => {
    link.addEventListener("click", (el) => {
        linkes.forEach((es) => {
            es.classList.remove("active");
        });
        el.target.classList.add("active");
        el.preventDefault();
        document.querySelector(`#${el.target.dataset.link}`).scrollIntoView({
            behavior: "smooth",
        });
    });
});