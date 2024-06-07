document.addEventListener('DOMContentLoaded', function () {
    function changeBg() {
        var navbar = document.getElementById('navbar');
        var scrollValue = window.scrollY;
        if (scrollValue > 50) {
            navbar.classList.add('bgColor');
        } else {
            navbar.classList.remove('bgColor');
        }
    }
    window.addEventListener('scroll', changeBg);
});
