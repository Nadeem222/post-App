let background = document.querySelector("#bgImg");
let toggles = document.querySelectorAll(".toggleBox");
let textarea = document.querySelector("textarea");
let post = document.querySelector("#post");
let outputText = document.querySelector("#result");
let centre = document.querySelector(".center");


let arr = Array.from(toggles);

// console.log(arr[0].classList[0] , toggles)





arr.forEach(toggles => {
    toggles.addEventListener('click', (e) => {
        
        // console.log(e.target.classList[0])

        let inputBackkground =  e.target.classList[0];

        textarea.style.background = '';
        textarea.style.backgroundImage = '';
        textarea.style.backgroundColor = '';
        centre.style.height = '';

        if(inputBackkground === "optOne"){
            textarea.style.background = "#fff" ;
            centre.style.height = "100%";

        }else if(inputBackkground === "optTwo" ){
            textarea.style.backgroundImage = "url(./img/optTwo.webp)" ;
            centre.style.height = "100%"
             
        }else if(inputBackkground === "optThree"){
            textarea.style.backgroundImage = "url(./img/optThree.webp)"
            centre.style.height = "100%"
        }else if(inputBackkground === "optFour"){
            textarea.style.backgroundImage = "url(./img/optFour.webp)"
            centre.style.height = "100%"
        }else if(inputBackkground === "optFive"){
            textarea.style.backgroundImage = "url(./img/optFive.webp)";
            centre.style.height = "100%"
        }else if(inputBackkground === "optSix"){
            textarea.style.backgroundImage = "url(./img/optSix.webp)";
            centre.style.height = "100%"
        }
        else if(inputBackkground === "optSeven"){
            textarea.style.backgroundColor = "#C600FF";
            centre.style.height = "100%"
        }else if(inputBackkground === "optEight"){
            textarea.style.backgroundColor = "#E2013B";
            centre.style.height = "100%"
        }else if(inputBackkground === "optNine"){
            textarea.style.backgroundColor = "#000";
            centre.style.height = "100%"
        }
        
        
    })
})

post.addEventListener('click' , () => {
    let inputText = textarea.value;

    outputText.innerHTML += `<p> ${inputText} </p> </br>`;

    textarea.value = "";
})


background.addEventListener('click' , () =>{
    document.querySelector("#toggleArrow").style.display ="flex";
    document.querySelector("#bgImg").style.display ="none";
    document.querySelector(".backgroundOpt").style.display = "flex";
    
    console.log("hellow")
})

document.querySelector("#toggleArrow").addEventListener('click' , () => {
    document.querySelector(".backgroundOpt").style.display = "none";
    document.querySelector("#bgImg").style.display ="flex";
    document.querySelector("#toggleArrow").style.display ="none";
    

    console.log("hi")
})