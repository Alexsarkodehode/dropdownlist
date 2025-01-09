//method one

/* const img_1 = document.querySelector("img")
console.log(img_1)
img_1.src = "../images/ancientjapanesehouse.jpg" */

//method two 

/* const img = document.createElement("img")
img.src = "../images/ancientjapanesehouse.jpg"

img.style.width = "100%"
img.style.height = "100%"
img.style.borderRadius = "1.5%"

document.body.appendChild(img) */

//method three 

/* const myImage = document.querySelectorAll("img")

console.log(myImage)

myImage[0].src = "../images/ancientjapanesehouse.jpg"

console.log(myImage[0])

myImage[0].setAttribute("class", "myStyle") */

//method 4
/* 
let thisImage = document.createElement("img")

thisImage.src = "../images/architect-9280053_1280.jpg"

thisImage.addEventListener("click" ,function(){
    thisImage.setAttribute("class", "myStyle")
    console.log("clicked")})


document.body.appendChild(thisImage)
 */

//method 5
/* 
const thisImage = document.createElement("img")

thisImage.src = "../images/architect-9280053_1280.jpg"

thisImage.addEventListener("click", function(e){
    e.target.classList.toggle("myStyle")
    console.log("clicked")
} )

document.body.appendChild(thisImage)
 */




let myImage = document.createElement("img")

myImage.src = "../images/beach1.jpg.jpg"

myImage.addEventListener("click", function(){
    console.log(e.target.src)
}  )

document.body.appendChild(myImage)