const loading = document.querySelector('.loading-text');
const bg =document.querySelector('.bg');
var load = 0 ;

const interval = setInterval(blurry,30)

function blurry(){
    load++;
    if(load>99){
        clearInterval(interval)
    }
loading.innerHTML=`${load}%`
loading.style.opacity = scale(load , 0 ,100 , 1 , 0)
bg.style.filter= `blur(${scale(load,0,100,30,0)}px)`
}



const scale = (number, inMin, inMax, outMin, outMax) =>{
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
