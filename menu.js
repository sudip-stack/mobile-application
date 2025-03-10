document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector(".nav_list");

    burger.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});