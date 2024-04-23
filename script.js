//we start with selecting the dropdown classes and then we put it into a variable
//After we select the dropdowns classes we chain the variable into a forEach method
//we make the different variables inside the forEach method
//Then we select the different html tags like sub div, sub sub div, ul and li tags that come under ul. 
//And their classes .select .caret .menu .menu li 




/* we use the querySelectorAll to select multiple elements at the same time */
const dropDowns = document.querySelectorAll('.dropdown');

/*after */
dropDowns.forEach(dropdown => {

const select = document.querySelector('.select');
const caret = document.querySelector('.caret');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu list')

})

