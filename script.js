const dropDowns = document.querySelectorAll('.dropdown');

/* We write dropDown instead of dropDowns because the dropdowns are split into individual dropDowns */
dropDowns.forEach(dropDown => {
    dropDown.addEventListener('click', () => {
        /* querySelector is selecting the css class .active.
        javascript method remove() removes active from the classlist whom was added through html */
        document.querySelector('.active').classList.remove('active');
        dropDown.classList.add('active');
    })
})