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

let thisImage = document.createElement("img")

thisImage.src = "../images/beach1.jpg.jpg"

thisImage.addEventListener(click,function(){})

document.body.appendChild(thisImage)


