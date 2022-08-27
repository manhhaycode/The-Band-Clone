const buyBtns = document.querySelectorAll('.buy-ticket');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const closeHeader  = document.querySelector('.modal-header-close');
const closeFooter = document.querySelector('.modal-footer-close')
for(const btn of buyBtns){
    btn.addEventListener('click', function(){
        modal.classList.add('open');
    })
}

closeHeader.addEventListener('click', function(){
    modal.classList.remove('open');
});

closeFooter.addEventListener('click', function(){
    modal.classList.remove('open');
});
modal.addEventListener('click', function(){
    modal.classList.remove('open');
});

modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
});


const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNav = document.querySelector('.mobile-nav-btn');
const autoClose = document.querySelectorAll('.nav-btn');
mobileMenu.onclick = function(){
    var isClosed = header.clientHeight === 47;
    if(isClosed){
        header.style.height = 'auto';
    } else{
        header.style.height = null;
    }
}
for(const btn of autoClose){
    btn.addEventListener('click', function(){
        header.style.height = '46.5px';
})
}

var index = 0;
const slider = document.getElementById('slider');
const textContents = document.getElementsByClassName('text-content');
const backGroundImg = ['los-angeles', 'new-york', 'chicago'];
autoSlide();
function autoSlide(){
    for(let i = 0; i < textContents.length; i++){
        textContents[i].style.display = 'none';
        slider.classList.remove(backGroundImg[i]);
    }
    textContents[index].style.display = 'block';
    slider.classList.add(backGroundImg[index++]);
    if(index == textContents.length){index=0}
    setTimeout(autoSlide, 4000);
}