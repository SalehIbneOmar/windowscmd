/*

**************************************  
    Windows 10 Command Prompt design                                
    Designed by: Saleh Ibne Omar                  
    Email: salehibneomar@gamil.com
    Date: 24 JAN 2019

**************************************    

*/

window.onload = function(){

    function closeWindow(){
        document.getElementById("cmd-con").style.display = "none";
        document.getElementById("app-icon").style.background = "transparent";
    }
    var close = document.getElementById("exit");
    close.addEventListener("click", closeWindow);


    function openCmd(){
        document.getElementById("cmd-con").style.display = "block";
        document.getElementById("app-icon").style.background = "rgba(255, 255, 255, 0.2)";
    }
    var open = document.getElementById("app-icon");
    open.addEventListener("click", openCmd);


    function minimizeWindow(){
        document.getElementById("cmd-con").style.display= "none";
        document.getElementById("app-icon").style.background = "rgba(255, 255, 255, 0.2)";
    }
    var mini = document.getElementById("minimize");
    mini.addEventListener("click", minimizeWindow);

}