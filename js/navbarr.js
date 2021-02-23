window.addEventListener('scroll', event =>{
    let nav = document.querySelector('header');

    (window.scrollY >= 44) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
});

