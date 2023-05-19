setInterval(setClock,1000);

const c=document.querySelector('[a]')
const d=document.querySelector('[b]')
const e=document.querySelector('[c]')

function setClock(){
const element=new Date();
const second=element.getSeconds()/60;
const minute=(second+element.getMinutes())/60;
const hour=(minute+element.getHours())/12;
setRotation(e,second);
setRotation(d,minute);
setRotation(c,hour);
}
function setRotation(x,ratio){
    x.style.setProperty('--rotation',ratio*360)
}
setClock();