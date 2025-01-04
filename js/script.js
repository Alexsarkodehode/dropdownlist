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

const my_images = document.querySelectorAll("img")

console.log(my_images)

my_images[0].src = "../images/ancientjapanesehouse.jpg"




