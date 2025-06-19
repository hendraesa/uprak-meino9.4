const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// modal box
const itemDetailModal= document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) =>  {
        itemDetailModal.style.display = "flex";
        e.preventDefault();
    };
});

// klick tombol close pada modal

document.querySelector(".modal .close-icon").onclick = (e) => {
    itemDetailModal.style.display = "none";
    e.preventDefault();
}