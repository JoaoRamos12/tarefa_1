const myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/html5.png"){
        myImage.setAttribute("src", "images/html50.png");
    }else{
        myImage.setAttribute("src", "images/html5.png")
    };

};

//mensagem de boas vindas personalizada
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setuserName(){
    let myName = prompt("Por favor, digite seu nome: ");
    localStorage.setItem("name", myName);
    myHeading.textContent = `JavaScript  é muito legal, ${myName}!`;
}

if(!localStorage.getItem("name")){
    setuserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = `JavaScript é muito legal, ${storedName}!`;
}

myButton.onclick = () => {
    setuserName();
}