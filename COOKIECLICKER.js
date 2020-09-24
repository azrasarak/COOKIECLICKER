
var num = 0; 

var cookie = document.getElementById("cookie"); 

function cookieClick(){
    num += 1; 

    var numbers = document.getElementById("numbers"); 

    var upgradeLevel = document.getElementById ("upgradeLevel");

numbers.innerHTML = num; 
if (num >= 15){
    num += 2; 
    upgradeLevel.innerHTML = "Level 1";
    }
if (num >= 250){
    num += 10; 
    upgradeLevel.innerHTML = "Level 2"; 
}
if (num >= 500){
    num += 30; 
    upgradeLevel.innnerHTML = "Level 3"; 
}
}
   









function shrink (){
    cookieEl.classList.add('shrink')
    }
    function grow(){
    cookieEl.classList.remove('shrink')
    }
    
    cookieEl.addEventListener('click', cookieClicked)
    cookieEl.addEventListener('mousedown', shrink)
    cookieEl.addEventListener('mouseup', grow)
    
    let showButton= document.getElementById('show')
    let removeButton= document.getElementById('remove')
    
    function showCookie() { 
    cookieEl.classList.remove('hide')
    
        showButton.classList.add('remove')
        removeButton.classList.remove('remove')
    }
    function hideCookie(){ 
        cookieEl.classList.add('hide')
    
        showButton.classList.remove('add')
        removeButton.classList.add('remove')
    }
    showButton.addEventListener('click', showCookie)
    removeButton.addEventListener('click', hideCookie)
    
