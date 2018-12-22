var output=document.getElementById("btn-menu");
output.addEventListener("click",toggleMenu);
var menuOpacity=0;
function toggleMenu(e){
    var overlaynew=document.getElementsByClassName("overlay")[0];
    var eventTarget=e.target;
    var speed=10;
    console.log(eventTarget.className)
    if(eventTarget.className=="btn-open"){
        fadeIn(overlaynew,speed);
        eventTarget.className="btn-close";
    }else if(eventTarget.className=="btn-close"){
        fadeOut(overlaynew,speed)
        eventTarget.className="btn-open";
    }
}

function fadeIn(element,speed){
    var isInterval=setInterval(function(){
        element.style.opacity=Number(element.style.opacity)+0.02;
        if(element.style.opacity>=1){
            element.style.opacity=1;
            clearInterval(isInterval);

        }
    },speed);
}

function fadeOut(element,speed){
    element.style.opacity=1;
    var isInterval=setInterval(function(){
        element.style.opacity=Number(element.style.opacity)-0.02;
        if(element.style.opacity<=0){
            element.style.opacity=0;
            clearInterval(isInterval);

        }
    },speed);
}