import { smoothScroll } from "./module.js/smoothScroll.mjs";
import { spoilerFlex } from "./module.js/spoiler.mjs";

// const sticky = [...document.querySelectorAll('[data-sticky]')];
// const main = document.querySelector('main');



// window.addEventListener('scroll',fixedTop)

// function fixedTop(){
//    if(window.scrollY>=main.clientHeight - window.innerHeight){
//       const top = main.clientHeight - window.innerHeight;
//       sticky.forEach(el=>{
//             el.style.cssText=`
//                position:absolute;
//                top:${top}px;
//             `
//          })
//    }else{
//       sticky.forEach(el=>{
//          el.style.cssText=``;
//       })
//    } 
// }

spoilerFlex()
window.addEventListener('resize',spoilerFlex)

