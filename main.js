function myTime (){

     var myDate = new Date();
     var hr,min = (myDate.getMinutes() <10) ? "0" + myDate.getMinutes(): myDate.getMinutes(),
     sec = (myDate.getSeconds() <10) ? "0" + myDate.getSeconds(): myDate.getSeconds (),
     m = (myDate.getHours() >=12 ) ? "PM" : "AM";

     if (myDate.getHours() == 0){

         hr =12;

     } else if(myDate.getHours()>12){
         hr = myDate.getHours() -12;
     }

     else {
        hr = myDate.getHours();
     }


    var currentTime = hr + ":" + min + ":" +sec + ":";

     document.getElementsByClassName("hours")[0].innerHTML = currentTime;
     document.getElementsByClassName("menuti")[0].innerHTML = m;

     var myDay = ["Sunday","Monday","Tushday","Wednesday", "Thusrday","Friday","Saturday"];

     var myMonth = ["January","February","March","April", "May","June","july","August","September", "October","Novemnber","December"];

      day = myDate.getDate();

      var currentDate = myDay[myDate.getDay()] + "," + myMonth[myDate.getMonth()] +  day;

       document.getElementsByClassName("date")[0].innerHTML = currentDate


}


 myTime();

 setInterval(function(){

    myTime();
 },1000);