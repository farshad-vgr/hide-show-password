const input = document.querySelector('#password'), showBtn = document.querySelector('#show');

showBtn.addEventListener('click', () => {
    if (input.type === 'password') {
        input.type = 'text';
        showBtn.classList.add('hide');
    } else {
        input.type = 'password';
        showBtn.classList.remove('hide');
    }
})