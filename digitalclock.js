<!DOCTYPE html>
<head>
    
    <title>Digital Clock</title>
</head>
<body>

<style>
body{
background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(228,29,253,0.3170518207282913) 50%, rgba(252,176,69,1) 100%);
}
.clock{
   
    letter-spacing: 5px;  
   position: absolute;
   top: 50%;
   left: 40%;
   bottom: 5%;
   font-size: 60px;
   font-family: Arial, Helvetica, sans-serif;
   color: black;
  
}


</style>

    <div id="digitalclock"  class="clock"></div>
   <script type="text/javascript">
    function showtime(){

               var date = new Date();
               var h = date.getHours();
               var m = date.getMinutes();
               var s = date.getSeconds();
               var session="AM";
               
if(h==0){
    h=12;
}
if(h>12){
h=h-12;
session ="PM";
}
if(h<10){
h="0"+h;
}
if(s<10){
s="0"+s;
}
if(m<10){
m="0"+m;
}
  
  document.getElementById("digitalclock").innerHTML= h+":"+m+":"+s+""+session;
setTimeout(showtime,1000)
 }
 
showtime();

    

     
    
   </script> 






</body>
</html>
