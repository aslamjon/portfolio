window.addEventListener('scroll', event =>{
    let nav = document.querySelector('header');

    (window.scrollY >= 44) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
});


// navigation scroll active comment
// window.addEventListener('scroll', event =>{
//     let navigatActive = document.querySelectorAll('header .container .row .navbar .collapse ul li a');
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

// const currentLocation = location.href;
// const menuItem = document.getElementsByName('vavv');
// const menuLength = menuItem.length;
// for (let i=0; i<menuLength; i++) {
//     if(menuItem[i].href === currentLocation){
//         menuItem[i].className = 'active';
//     }
// } 

