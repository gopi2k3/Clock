let icon=document.querySelector('.icons')
let sun=document.querySelector('.fa-sun')
let box=document.querySelector('.box')


let timeBox=document.querySelectorAll('.time-text')



icon.addEventListener('click',()=>{
    icon.classList.toggle('dark')
    console.log('Click')
    document.body.classList.toggle('dark')

    sun.classList.toggle('dark')

    box.classList.toggle('dark')

    timeBox.forEach((e)=>{
        // console.log(e)

        e.classList.toggle('dark')
    })
})

let title=false


setInterval(()=>{
    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds(),

    days=date.getDay()

    let d;

    d = hour > 12 ? "PM" : "AM";
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? (hour = 12) : hour;
    min = min < 10  ? '0'+min:min
    sec = sec < 10  ? '0'+sec:sec
    hour = hour < 10  ? '0'+hour:hour

   document.querySelector('.hour_num').innerHTML=hour
   document.querySelector('.min_num').innerHTML=min
   document.querySelector('.sec_num').innerHTML=sec
    document.querySelector('.am_pm').textContent=d


    let day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Satday']


    console.log(day[days])


    document.querySelector('.day').textContent=day[days]


   

},1000)


setInterval(()=>{
    document.title=title? 'Digital Clock':'Made by Gopi'

    title=!title
},2000)