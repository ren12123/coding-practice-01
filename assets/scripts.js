document.addEventListener('DOMContentLoaded', () => {
    const formBtn = document.querySelector('.form_btn');

    formBtn.addEventListener('click', (event) => {
        const inputs = document.querySelectorAll('.form_input');

        inputs.forEach(input => {
            const parent = input.closest('.form_item');
            const label = parent.querySelector('.name');

            if (input.value.trim() === '' && !input.classList.contains('form_messeage')) {
                label.classList.add('error-style');
            } else {
                label.classList.remove('error-style');
            }
        });
    });


    const moveBtns = document.querySelectorAll('.move_btn');
    const contactSection = document.querySelector('.contact');

        moveBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
});