const dropDowns = document.querySelectorAll('.dropdown');

dropDowns.forEach(dropDown => {
    dropDown.addEventListener('click', () => {
        dropDown.classList.toggle('active');
    })
})