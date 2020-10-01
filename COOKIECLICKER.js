let cookieEl= document.getElementById('cookie')
let num = 0; 



let cookie = document.getElementById("cookie"); 

function cookieClicked(){
    num += 1; 

    var numbersEl = document.getElementById("numbers"); 

    var upgradeLevel = document.getElementById ("upgradeLevel");

    numbersEl.innerHTML = num; 
    if (num >= 10 ){
        num += 2; 
        upgradeLevel.innerHTML = "Level 1";
    }
    if (num >= 20 ){
        num += 10; 
        upgradeLevel.innerHTML = "Level 2"; 
    }
    if (num >=50){
        num+= 50; 
        upgradeLevel.innerHTML = "Level 3";
    }
 
    console.log("Checking mulitple")
    if (num % 10 === 0 ){
        alert("Congrats your score is a mulitple of 10!")
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
    
