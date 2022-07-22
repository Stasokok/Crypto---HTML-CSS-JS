export const accordion = () => {
    const list = document.querySelector('.faq__list');

    list.addEventListener('click', (event) => {
        const button = event.target.closest('.faq__question');

        if(button) {
            const item = button.closest('.faq__item');
            item.classList.toggle('faq__item_show');
        }
    })
}