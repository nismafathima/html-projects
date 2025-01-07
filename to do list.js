<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TO DO LIST</title>
    <style>
        body{
            background: rgb(131,58,180);
            background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,60,0.3170518207282913) 50%, rgba(252,176,69,1) 100%);   
        }
        h1{
            color: red;
        }
        button{
            background-color: aqua;
        }
        input[type="text"]
        {
            border: solid black 2px;
            border-radius: 4px;
            color:black;
        }
        li{
            color: azure;
        }

        
    </style>
</head>
<body>
    <h1> To Do-list</h1>

        <input type="text" id="shown">
        <button onclick="add()">ADD</button>
        <ul id="result">
            <li>  Wake up
                <button onclick="deleteitem(event)">Delete</button>
            </li>
            <li>  Drink water
                <button onclick="deleteitem(event)">Delete</button>
            </li>
            <li>  Do Exercise
                <button onclick="deleteitem(event)">Delete</button>
            </li>
            <li>  Medidate 10 minutes
                <button onclick="deleteitem(event)">Delete</button>
            </li>
            <li>  books to read
                <button onclick="deleteitem(event)">Delete</button>
            </li>
        </ul>
    
    <script>
        var ul=document.getElementById("result")
        var input=document.getElementById("shown")
        function add()
        {
            var addelement=document.createElement("li")
            addelement.innerHTML=input.value    +       "<button onclick='deleteitem(event)'>Delete</button>"
                ul.append(addelement)
        }
        function deleteitem(event)
         {
          event.target.parentElement.remove()
        }

    </script>
</body>
</html>
