let background = document.querySelector("#bgImg");
let toggles = document.querySelectorAll(".toggleBox");
let textarea = document.querySelector("textarea");

let arr = Array.from(toggles);

// console.log(arr[0].classList[0] , toggles)





arr.forEach(toggles => {
    toggles.addEventListener('click', (e) => {
        
        // console.log(e.target.classList[0])

        let inputBackkground =  e.target.classList[0];

        textarea.style.background = '';
        textarea.style.backgroundImage = '';
        textarea.style.backgroundColor = '';

        if(inputBackkground === "optOne"){
            textarea.style.background = "#fff" 

        }else if(inputBackkground === "optTwo" ){
            textarea.style.backgroundImage = "url(./img/optTwo.webp)" 
             
        }else if(inputBackkground === "optThree"){
            textarea.style.backgroundImage = "url(./img/optThree.webp)"
        }else if(inputBackkground === "optFour"){
            textarea.style.backgroundImage = "url(./img/optFour.webp)"
        }else if(inputBackkground === "optFive"){
            textarea.style.backgroundImage = "url(./img/optFive.webp)"
        }else if(inputBackkground === "optSix"){
            textarea.style.backgroundImage = "url(./img/optSix.webp)"
        }
        else if(inputBackkground === "optSeven"){
            textarea.style.backgroundColor = "#C600FF"
        }else if(inputBackkground === "optEight"){
            textarea.style.backgroundColor = "#E2013B"
        }else if(inputBackkground === "optNine"){
            textarea.style.backgroundColor = "#000"
        }
        
        
    })
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