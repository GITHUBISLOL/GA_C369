document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mobile-menu').addEventListener('click', function() {
        var navList = document.querySelector('.navlist');
        navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
    });
});
var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
