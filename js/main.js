function toggleMenu() {
    const navLinks = document.querySelector(".nav-item-list");
    const mainContent = document.querySelector("#main-content");
    navLinks.classList.toggle("active");
    mainContent.classList.toggle("active");
}
