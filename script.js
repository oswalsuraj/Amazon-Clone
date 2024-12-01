const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;
function changeSlide(){
    for(let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click', (e) =>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})
next_btn.addEventListener('click', (e) =>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})




const scrollContainer = document.querySelector('.products');
for(const items of scrollContainer){
    items.addEventListener('wheel',(evt)=> {
        evt.preventDefault();
        items.scrollLeft += evt.deltaY;
    });
}