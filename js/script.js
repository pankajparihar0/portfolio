	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let load = document.querySelector(".xy");
    let ring = document.querySelector(".yz");
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
    window.addEventListener('DOMContentLoaded',()=>{
       let f= setInterval(()=>{
            let x =parseInt (document.getElementById('count').innerHTML);
            document.getElementById('count').innerText = x+5+"%";
            if(x==95){
                setTimeout(() => {
                    load.classList.remove('load');
                    ring.classList.remove('loader');
                    clearInterval(f);
                },0);
            }

        },75);
    
    })
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }