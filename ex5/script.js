// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp
var button=document.getElementById("myButton");
var container=document.getElementById("boxContainer");

button.addEventListener("click",function(){

    var div=document.createElement("div");
    div.classList.add("box");

    container.appendChild(div);
    
    
});