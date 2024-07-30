document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mobile-menu').addEventListener('click', function() {
        var navList = document.querySelector('.navlist');
        navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
    });
});
