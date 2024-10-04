const web3Img = document.querySelector('#web-3');
const menu = document.querySelector('.navbar-side img');
const close = document.querySelector('.nav-list img');
const list = document.querySelector('.nav-bg');

menu.addEventListener('click',()=>{
    list.style.display = 'block';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
})

close.addEventListener('click',()=>{
    list.style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
})


setInterval(() => {
    if(innerWidth <= 670){
        web3Img.src=`./assets/images/image-web-3-mobile.jpg`;
    }else{
        web3Img.src=`./assets/images/image-web-3-desktop.jpg`;
    }   
}, 100);
