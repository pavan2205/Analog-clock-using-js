setInterval(setclock,1000);
const hourHand=document.querySelector('[data-hour-hand]')
const minHand=document.querySelector('[data-min-hand]')
const secHand=document.querySelector('[data-sec-hand]')

function setclock(){
    const currentdate=new Date();
    const seconds=currentdate.getSeconds()/60;
    const minutes=(seconds+currentdate.getMinutes())/60;
    const hours=(minutes+currentdate.getHours())/12;
    setRotation(hourHand,hours);
    setRotation(minHand,minutes);
    setRotation(secHand,seconds);
}
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360);
}
setclock()