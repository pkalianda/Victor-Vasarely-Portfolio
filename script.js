const hamburger = document.querySelector('.heading .nav-bar .nav-items .hamburger');
const mobile_menu = document.querySelector('.heading .nav-bar .nav-items ul');
const menu_item = document.querySelectorAll('.heading .nav-bar .nav-items ul li a');
const header = document.querySelector('.heading.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

 document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 350){
        header.style.backgroundColor ="#000000";
    } else{
        header.style.backgroundColor = 'transparent';
    }
 });

menu_item.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
