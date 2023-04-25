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
