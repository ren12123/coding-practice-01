document.addEventListener('DOMContentLoaded', () => {
    const formBtn = document.querySelector('.form_btn');

    formBtn.addEventListener('click', (event) => {
        const inputs = document.querySelectorAll('.form_input');

        inputs.forEach(input => {
            const parent = input.closest('.form_item');
            const label = parent.querySelector('.name');

            if (input.value.trim() === '') {
                label.classList.add('error-style');
            } else {
                label.classList.remove('error-style');
            }
        });
    });
});