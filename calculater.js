<!DOCTYPE html>
<html lang="en">
<head>
    <title>CALCULATOR</title>
    <style>
body{
    background: rgb(63,94,251);
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,244,0.41595441595441596) 100%);
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
margin: 0;


}
.title{
    background-color: red;
    height: fit-content;
    width: fit-content;
    color: white;
  
    
}
    
input[type="button"]{
    background-color: red;
    color: white;
    border: solid black 2px;
    border-radius: 20px;
    width: 100%; 
    
}
.calculator{
width: 300px;
}
input[type="text"]{
    border: solid black 2px;
}




    </style>
</head>
<body><div class="calculator">
    <div class="title"><h1>CALCULATOR</h1></div>
    <table border="0">
        <tr>
            <td colspan="3" ><input type="text" id="result" ></td>
            <td><input type="button" value="c" onclick="clr()"></td>
        </tr>
        <tr>
            <td><input type="button" value="1" onclick="display('1')"></td>
            <td><input type="button" value="2" onclick="display('2')"></td>
            <td><input type="button" value="3" onclick="display('3')"></td>
            <td><input type="button" value="/" onclick="display('/')"></td>
        </tr>
         <tr>
            <td><input type="button" value="4" onclick="display('4')"></td>
            <td><input type="button" value="5" onclick="display('5')"></td>
            <td><input type="button" value="6" onclick="display('6')"></td>
            <td><input type="button" value="*" onclick="display('*')"></td>
         </tr>
         <tr>
           <td><input type="button" value="7" onclick="display('7')"></td>
            <td><input type="button" value="8" onclick="display('8')"></td>
            <td><input type="button" value="9" onclick="display('9')"></td>
            <td><input type="button" value="+" onclick="display('+')"></td>
         </tr>
         <tr>
            <td><input type="button" value="0" onclick="display('0')"></td>
            <td><input type="button" value="." onclick="display('.')"></td>
            <td><input type="button" value="=" onclick="equate()"></td>
            <td><input type="button" value="-" onclick="display('-')"></td>
        </tr>
        </table></div>
<script>
       function clr(){
document.getElementById("result").value="";
       }
       function display(val){
document.getElementById("result").value+=val;
       }
       function equate(){
let x =document.getElementById("result").value;
let y=eval(x);
document.getElementById("result").value=y;
       }
 clear();
display(val);
equate();
</script>


</body>
</html>