
let img = document.getElementsByClassName("items")

console.log(img)

let activeItem = 0

const next = document.getElementById("next")
const previous = document.getElementById("previous")


next.addEventListener("click",

    function(){

    if(activeItem < img.length - 1){

        img[activeItem].classList.remove("active")

        activeItem++

        img[activeItem].classList.add("active")

        if(activeItem === img.length - 1){

            next.classList.add("hidden")
        }else{
            previous.classList.remove("hidden")
        }
    }
}
)

previous.addEventListener("click",

    function(){
    if(activeItem <= img.length - 1 ){

        img[activeItem].classList.remove("active")

        activeItem--

        img[activeItem].classList.add("active")

        if(activeItem == 0){

            previous.classList.add("hidden")
        }else{
            next.classList.remove("hidden")
        }
    }
}
)

