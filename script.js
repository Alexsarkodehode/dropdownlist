//we start with selecting the dropdown classes and then we put it into a variable
//After we select the dropdowns classes we chain the variable into a forEach method
//we make the different variables inside the forEach method
//Then we select the different html tags like sub div, sub sub div, ul and li tags that come under ul. 
//And their classes .select .caret .menu .menu li 




/* we use the querySelectorAll to select multiple elements at the same time */
const dropDowns = document.querySelectorAll('.dropdown');


dropDowns.forEach(dropdown => {

    const selectClicked = document.querySelector('.select');
    const selected = document.querySelector('.selected')
    const caretRotate = document.querySelector('.caret');
    const menuOpen = document.querySelector('.menu');
    const menuList = document.querySelector('.menu list')



select.addEventListener('click', () =>{

    selectClicked.classList.toggle('.select-clicked');
    caretRotate.classList.toggle('.caret-rotate');
    menuOpen.classList.toggle('.menu-open');
})

options.forEach(option => {
    option.addEventListener('click', () =>{
        selected.innerText = option.innerText
        selectClicked.classList.remove('select-clicked');
        caretRotate.classList.remove('caret-rotate');
        menuOpen.classList.remove('menu-open');
    })
})

})