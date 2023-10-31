function initializeNav() {
    $("#NAVBAR-PLACEHOLDER").load("./components/navbar.html", function () {
        const navIcon = document.querySelectorAll(".header__icon")[0];
        const nav = document.querySelector("nav");
        navIcon.addEventListener("click", function () {
            nav.classList.toggle("mobile-hidden");
        });
    });
}

function initializeSearch() {
    $("#FOOTER-PLACEHOLDER").load("./components/footer.html", function () {
        const searchIcon = document.querySelectorAll(".header__icon")[1];
        const searchInput = document.querySelector(".header__search-bar > div");
        const h1 = document.querySelector("h1");
        const closeIcon = document.querySelector(".close__icon");

        searchIcon.addEventListener("click", function () {
            searchInput.classList.toggle("mobile-hidden");
            h1.classList.toggle("mobile-hidden");
            searchIcon.classList.toggle("mobile-hidden");
            closeIcon.classList.toggle("mobile-hidden");
        });

        closeIcon.addEventListener("click", function () {
            searchInput.classList.toggle("mobile-hidden");
            h1.classList.toggle("mobile-hidden");
            searchIcon.classList.toggle("mobile-hidden");
            closeIcon.classList.toggle("mobile-hidden");
        });
    });
}

function loadSkeleton() {
    initializeNav();
    initializeSearch();
}

loadSkeleton();
