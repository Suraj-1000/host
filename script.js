// #id selector
document.getElementById("parent").innerHTML=("Hello World");
document.getElementById("parent").style.cssText=("background-color:red; color:black; text-align:center");

document.getElementsByClassName("Greetings")[0].innerHTML=("Hello Everyone ");
document.getElementsByClassName("Greetings")[1].innerHTML=("Hello Morning Everyone");
document.getElementsByClassName("Greetings")[2].innerHTML=("Hello Morning Everyone");
document.getElementById("parent1").style.cssText=("background-color:green; color:black; text-align:center; font-size:25px;");

document.getElementsByTagName("h1")[0].style.cssText=("background-color:darkblue; color:white; text-align:center ");
document.getElementsByTagName("h1")[1].style.cssText=("background-color:white; color:black; text-align:center ");
document.getElementsByTagName("h1")[2].style.cssText=("background-color:red; color:white; text-align:center ");

// #query selector
document.querySelector("h2").style.cssText=("text-align:center; text-transform:uppercase; background-color:black; color:white;");
document.querySelector("#hi").style.cssText=("text-align:center; text-transform:uppercase; background-color:orange; color:white;");
document.querySelector(".hey").style.cssText=("text-align:center; text-transform:uppercase; background-color:red; color:white;");


const change = document.querySelectorAll("h3");
for(i=0;i<=change.length;i++){
    change[i].innerHTML=("I am Suraj");
    change[i].style.cssText=("text-align:center; text-transform:uppercase; background-color:pink; color:white");
}

function myFunction(){
    document.open();
    document.write("<h1>Hello Guyz </h1>");
    document.close();
}