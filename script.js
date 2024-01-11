let toggleMenu = document.querySelector(".toggleBar")
let menuBtn = document.querySelector("#menu")
let b=0
menuBtn.addEventListener("click",()=> {
    if(b == 0) {
        toggleMenu.style.display = "flex"
        document.querySelector(".main").style.overflow = "hidden"
        b=1
    }
    else  {
        toggleMenu.style.display = "none"
        document.querySelector(".main").style.overflow = "auto"
        b=0
    }
})




// dropdown function 
// 1st dropdown 
let dropBox1 = document.querySelector(".drop1")
let dropBtn1 = document.querySelector(".dropmenubtn1")

let a=0
dropBtn1.addEventListener("click",()=> {
    if(a == 0) {
        dropBox1.style.height = "130px"
        dropBtn1.style.transform = "rotate(-180deg)"
        a=1
    }
    else if(a == 1) {
        dropBox1.style.height = "60px"
        dropBtn1.style.transform = "rotate(360deg)"
        a=0
    
    }
})
    // 2st dropdown 
let dropBox2 = document.querySelector(".drop2")
let dropBtn2 = document.querySelector(".dropmenubtn2") 
dropBtn2.addEventListener("click",()=> {
    if(a == 0) {
        dropBox2.style.height = "145px"
        dropBtn2.style.transform = "rotate(-180deg)"
        a=1
    }
    else if(a == 1) {
        dropBox2.style.height = "55px"
        dropBtn2.style.transform = "rotate(360deg)"
        a=0
    
    }
})
// 3rd dropdown 
let dropBox3 = document.querySelector(".drop3")
let dropBtn3 = document.querySelector(".dropmenubtn3") 
dropBtn3.addEventListener("click",()=> {
    if(a == 0) {
        dropBox3.style.height = "140px"
        dropBtn3.style.transform = "rotate(-180deg)"
        a=1
    }
    else if(a == 1) {
        dropBox3.style.height = "55px"
        dropBtn3.style.transform = "rotate(360deg)"
        a=0
    
    }
})