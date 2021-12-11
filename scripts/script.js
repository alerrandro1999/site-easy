const btnmobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnmobile.addEventListener('click', toggleMenu);
btnmobile.addEventListener('touchstart', toggleMenu);


(function () {
    var menu = document.getElementById('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) menu.classList.add('menuFixo');
        else menu.classList.remove('menuFixo');
    });
})();


