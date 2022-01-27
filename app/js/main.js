// ==========mobile-menu===============================
const iconMenu = document.querySelector('.menu__icon');
const menuList = document.querySelector('.menu__list');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e){
        document.body.classList.toggle('no-scroll');
        iconMenu.classList.toggle('active');
        menuList.classList.toggle('active');
    });
}
// =======slider==============================
$('.content-top').slick({
    arrows: false,
    dots: true,
    autoplay: true
})


