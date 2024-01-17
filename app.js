let background = document.querySelector("#bgImg");



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