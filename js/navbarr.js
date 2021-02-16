window.addEventListener('scroll', event =>{
    let nav = document.querySelector('header');

    (window.scrollY >= 44) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
});


//navigation scroll active
// window.addEventListener('scroll', event =>{
//     let navigatActive = document.querySelectorAll(' .container .navbar  .nav-item  a');
//     let fromTop = window.scrollY;

//     navigatActive.forEach(link =>{
//      let sectionn = document.querySelector(link.hash);

//      if(
//          sectionn.offsetTop <= fromTop && 
//          sectionn.offsetTop + sectionn.offsetHeight > fromTop
//      )
//      {
//          link.classList.add('active');
//      } else {
//          link.classList.remove('active');
//      }
//     });
// })