let dropDowns = document.querySelector('.dropdown1');
const dropDown1 = document.querySelector('.dropdown1');

const dropDown2 = document.querySelector('.dropdown2');

/* We write dropDown instead of dropDowns because the dropdowns are split into individual dropDowns */
/*  */
dropDowns.forEach(dropDown => {
    dropDowns.addEventListener('click', () => {
        /* querySelector is selecting the css class .active.
        javascript method remove() removes active from the classlist whom was added through html */
        document.querySelector('.active').classList.remove('active');
        dropDowns.classList.add('active');
    })
})


