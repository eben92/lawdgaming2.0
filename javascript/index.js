const toggleBtn = document.querySelectorAll('.toggle');
const aside = document.querySelector('.aside-links');
const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.open-btn');

toggleBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const button = e.currentTarget;

        if (button.classList.contains('open-btn')) {
            button.classList.add('hide');
            aside.classList.remove('hide')
            closeBtn.classList.remove('hide');

        } else {
            openBtn.classList.remove('hide');
            aside.classList.add('hide')
            closeBtn.classList.add('hide');

            console.log('close');

        }
    })
})