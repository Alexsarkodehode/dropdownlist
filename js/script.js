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

//method 6

/* 
let myImage = document.createElement("img")

myImage.src = "../images/beach1.jpg.jpg"

myImage.addEventListener("click", function(e){
    e.target.classList.toggle("myStyle")
    console.log(e.target.src)
}  )

document.body.appendChild(myImage) */

//method 7

/* for(i=0; i<10; i++){
    const myImage = document.createElement("img")
    myImage.src = "../images/ancientjapanesehouse.jpg"
    document.body.appendChild(myImage)

    myImage.addEventListener("click", function(e){
    e.target.classList.toggle("myStyle")
    myImage.classList.add("marginStyle")
    console.log(e.target.src)
}  )
} */

//method 8


/* 
for(i=0; i<10; i++){
    
    const myImage = document.createElement("img");
    
    myImage.src = "../images/ancientjapanesehouse.jpg";

    if(i === 5 ) {
        myImage.style.borderRadius = "50%";
    }
    
    
    document.body.appendChild(myImage);

} */

//method 9
/* 
for(let i=0; i<10; i++){
    const myImage = document.createElement("img")
    myImage.src = "../images/ancientjapanesehouse.jpg"


    myImage.addEventListener("click", function(){
        console.log(`This is picture number: ${i}`)
    })
    
    document.body.appendChild(myImage)
} */

    //method 10
/* 
    for(let i = 0; i<10; i++ ){
        const myImage = document.createElement("img")
        myImage.src = "../images/beach1.jpg.jpg"

        
        
        document.addEventListener("click", function(){
            myImage.classList.add("myMargin")
            myImage.classList.add("myStyle")
            myImage.classList.add("myRadius")
        })
        
        document.body.appendChild(myImage)

    } */

        //method 11
/* 
        let c = 0, ci = 0, cd = 0
        const count = document.getElementById("count")
        const incCount = document.getElementById("incCount")
        const decCount = document.getElementById("decCount")

        function inc(){
            c++;
            ci = (ci >= 10) ? 0 : ci + 1
            update() 

        }

        function dec(){
            c = c > 0 ? c-1 : 0
            cd = (cd >= 10) ? 0 : cd + 1;
            update();
        }

        function update(){
            count.textContent = c;
            incCount.textContent = ci;
            decCount.textContent = cd; 
        }
 */
/* 
        let c = 0, ci = 0, cd = 0

        const count = document.getElementById('count')
        const inCount = document.getElementById('inCount')
        const deCount = document.getElementById('deCount')

        function inc(){
            c++;
            ci = (ci >= 10) ? 0 : ci + 1
            update()
        }

        function dec(){
            c = c > 0 ? c - 1 : 0;
            cd = (cd >= 10) ? 0 :cd +1
            update()
        }

        function update(){
            count.textContent = c;
            inCount.textContent = ci; 
            deCount.textContent = cd; 
        } */

            /* let c = 0, ci = 0, cd = 0

            const count = document.getElementById("count")
            const inCount = document.getElementById("inCount")
            const deCount = document.getElementById("deCount")

            function inc(){
                c = c > 0 ? c - 1 : 0; 
                cd = (cd >= 10) ? 0 : cd +1
                update() 
            }

            function dec(){
                c = c > 0 ? c - 1 : 0
                cd = (cd >= 10) ? 0 : cd + 1
                update()
            } */

                function inc(){
                    c++;
                    ci = (ci >= 10) ? 0 : ci + 1;
                    ci = (ci >= 10) ? 0 : ci + 1;
                    ci = (ci >= 10) ? 0 : ci + 1
                    ci = (ci >= 10) ? 0 : ci + 1
                    ci = (ci >= 10) ? 0 : ci + 1
                    ci = (ci >= 10) ? 0 : ci + 1
                    ci = (ci >= 10) ? 0 : ci + 1
                    ci = (ci >= 10) ? 0 : ci + 1
                    ci = (ci >= 10) ? 0 : ci + 1
                    ci = (ci >= 10) ? 0 : ci + 1
                    ci = (ci >= 10) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci +1
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci +1
                 //19   ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci +1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10  ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci +1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10  ) ? 0 : ci + 1 
                    ci = ( ci >= 10  ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = (ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0: ci + 1
                    ci = ( ci > = 10 ) ? 0 : c1 + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci > = 10  ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1
                    ci = (ci >= 10) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci +1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1
                    ci = ( ci >=10 ) ? 0 : ci + 1
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1
                    ci = ( ci > = 10) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci >= 10 ) ? 0 : ci + 1
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( >= 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10  ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10 ) ? 0 : ci + 1 
                    ci = ( ci > = 10) ? 0 : ci + 1 
                    ci = ( ci >= 10 ) ? 0 : ci + 1 
                    ci 
                    update() 
                }