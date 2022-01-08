// var sec=00;
// var hr=00;
// var min=00;

// var seconds=document.getElementById('sec');
// var minutes=document.getElementById('min');
// var hours=document.getElementById('hours');

// var start=document.getElementById('start');
// var stop=document.getElementById('stop');
// var reset=document.getElementById('reset');

// start.addEventListener('click',function(){
//     time=setInterval(startStopWatch,1000);
// })

// stop.addEventListener('click',function(){
//     clearInterval(time);
// })
// reset.addEventListener('click',function(){
//     clearInterval(time);
//     sec=00;
//     hr=00;
//     min=00;
//     seconds.innerHTML="0"+sec;
//     minutes.innerHTML="0"+min+":";
//     hours.innerHTML="0"+hr+":";
// })

// function startStopWatch(){
//     sec++;
//     if(sec<=9){
//         seconds.innerHTML="0"+sec;
//     }
//     if(sec>9){
//         seconds.innerHTML=sec;
//     }
//     if(sec>59){
//         min++;
//         sec=0;
//         seconds.innerHTML="0"+sec;
//     }
//     if(min<=9){
//         minutes.innerHTML="0"+min+":";
//     }
//     else if(min>9){
//         minutes.innerHTML=min+":";
//     }
//     if(min>59){
//         min=0;
//         minutes.innerHTML="0"+min+":";
//         hours++;
//     }
//     if(hours<9){
//         hr++;
//         hours.innerHTML="0"+hr+":";
//     }
//     if(hr>9){
//         hours.innerHTML=hr+":";
//     }
//     if(hr===24){
//         hr=0;
//         hours.innerHTML="0"+hr+":";
//     }
// }
