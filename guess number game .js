<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GUESS THE NUMBER GAME</title>
</head>
<body>
<style>
body{

    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(175,0,255,0.41595441595441596) 0%, rgba(247,71,244,1) 49%);

text-align: center;
margin: 250px;
}
h1{
    color: blueviolet;
}
input{
    border: 2px solid;
    border-color: blueviolet;
    border-radius: 5px;
}   
button{
    background-color: blueviolet;
    color: white;
}
p{
    color: blue;
}



</style>
<div class="one">
<h1>Guess The  Number</h1>
<input id="num">
<button   onclick="check()">Check</button>
<p id="result">you are wrong/right</p>
 </div>
    <script>
var input=document.getElementById("num")
var result=document.getElementById("result")
var randomNumber= Math.floor(Math.random()*10)+1
 function check(){
   var enterednumber=num.value
   if(randomNumber==enterednumber){
    console.log("Right")
    result.textContent="Right"
    alert('You Won')
   }
else{
    
    console.log("Wrong")
    result.textContent="Wrong"
    alert('You Lose')
    

}

 }









</script>










    </div>



</body>
</html>
