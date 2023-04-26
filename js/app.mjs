import { smoothScroll } from "./module.js/smoothScroll.mjs";
import { spoilerFlex } from "./module.js/spoiler.mjs";

spoilerFlex()
window.addEventListener('resize',spoilerFlex)

const burger = document.querySelector('.sidebar__burger');
if(burger){
   burger.addEventListener('click',event=>{
      if(document.body.classList.contains('_burgerOpen')){
         document.body.classList.remove('_burgerOpen')
      }else{
         document.body.classList.add('_burgerOpen')
      }
   })
}

document.addEventListener('click',event=>{
   if(event.target.closest('.sidebar') || !document.body.classList.contains('_burgerOpen')) return
   document.body.classList.remove('_burgerOpen')
})

const finds = [...document.querySelectorAll('[data-navigation]')];
const navigation = document.querySelector('.sidebar__navigation');

if(navigation){
   navigation.addEventListener('click',event=>{
      if(event.target.type === 'radio'){
         console.log(document.querySelector(`.${event.target.id}`));
         if(document.body.classList.contains('_burgerOpen'))document.body.classList.remove('_burgerOpen');
         smoothScroll(`.${event.target.id}`,'top')
      }
   })
}

if(finds.length>0){
   window.addEventListener('scroll',event=>{
      if(document.body.classList.contains('_smooth'))return;
      finds.forEach(el=>{
         if(el.getBoundingClientRect().top - (window.innerHeight - 300)<0 && el.getBoundingClientRect().bottom - (window.innerHeight - 300)>0){
            navigation.querySelector(`input[id='${el.dataset.navigation}']`).checked='yes';
         }else{

         }
      })
   })
}

const footerNav =  document.querySelector('._navigations');

if(footerNav){
   footerNav.addEventListener('click',event=>{
      event.preventDefault()
      if(event.target.dataset.scroll){
         smoothScroll(`.${event.target.dataset.scroll}`,'top')
      }
   })
}

const contactsNav = [...document.querySelectorAll('[data-contacts]')];

if(contactsNav.length>0){
   contactsNav.forEach(el=>el.addEventListener('click',event=>{
      event.preventDefault();
      smoothScroll('.contacts','top')
   }))
}