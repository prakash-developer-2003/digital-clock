



function setTime() {


    var timeFunction= new Date()

    var hrs=timeFunction.getHours()
    var min=timeFunction.getMinutes()
    var sec=timeFunction.getSeconds()
   

    

    // dates

    
    var day=timeFunction.getDate()
    console.log(day)
    var month=timeFunction.getMonth()+1
    var year =timeFunction.getFullYear()




    // ampm

    var ampm=document.getElementById("am_pm")

    if(hrs>12){
        hrs=hrs-12
        ampm.textContent="PM"

        
    }
    else
    ampm.textContent="AM"


    document.getElementById("hours").textContent=hrs
    document.getElementById("minutes").textContent=min
    document.getElementById("second").textContent=sec


    // dates
    document.getElementById("dates").textContent=day
    document.getElementById("months").textContent=month
    document.getElementById("years").textContent=year


    if(min<10){
        document.getElementById("hours").textContent="0" + min
    }


}
setInterval(setTime,500)

