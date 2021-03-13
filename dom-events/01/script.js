;
const alerts = document.querySelectorAll('.alert');
const button = document.querySelectorAll('.btn-close');

button.forEach((item) => {
    item.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-close')) {
            event.target.parentElement.classList.remove('show');
        } 
    });
});
