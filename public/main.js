const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

let dropdown =()=>{

    btn.classList.toggle('open');
    nav.classList.toggle ('flex');
    nav.classList.toggle ('hidden');
   
}

//hamburger menu dropdown
btn.addEventListener('click',(event)=>{
    event.stopPropagation();
    dropdown();
})


// hamburger menu closes on click outside of the menu
document.documentElement.addEventListener("click", function () {
  if (btn.classList.contains("open")) {
    dropdown();
  }
});