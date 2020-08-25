const tabcontent = document.querySelectorAll('.tab-content');
const tabLinks = document.querySelectorAll('.tablinks');

tabLinks.forEach(function(item) {
    item.addEventListener("click", openTabs);
 });

function openTabs(el) {
    var btnTarget = el.currentTarget;
    var choice = btnTarget.dataset.choice;
    tabcontent.forEach(function(el) {
       el.classList.remove("active");
    });
 
    tabLinks.forEach(function(el) {
       el.classList.remove("active");
    });
 
    document.querySelector("#" + choice).classList.add("active");
    
    btnTarget.classList.add("active");
 }


//  Navbar
const closeBtn = document.querySelector('.close');
const nav = document.querySelector('.nav-show');
console.log(nav);
function closeMe(){
   nav.classList.remove('active');
   document.body.style.overflowY = "auto";
}
const navSlide = () => {
   const burger = document.querySelector('.nav__icon');
   // Toggle Nav
   burger.addEventListener('click' , () => {
      nav.classList.add('active');
      document.body.style.overflowY = "hidden";
      console.log("working");
   });
}
closeBtn.addEventListener('click', closeMe)
navSlide();

let links = nav.querySelectorAll('a');
console.log(links)
links.forEach(link => link.addEventListener('click', closeMe) );



// Accordion
const items = document.querySelectorAll('.faq__body button');

function toggleAccordion(item) {
    const itemToggle = item.getAttribute('aria-expanded');

    for (let index = 0; index < items.length; index++) {
       items[index].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false'){
        item.setAttribute('aria-expanded', 'true')
    } 
    
}


items.forEach((item,i) => item.addEventListener('click', function work(){
   toggleAccordion(item);
   const icons = document.getElementsByClassName('icon');
   icons[i].classList.toggle('rotate')
   
}));