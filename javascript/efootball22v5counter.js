const downloadBtn = document.querySelectorAll('.download');
let counter = document.querySelector('.download-count');

const firebase = 'https://counter-16c12-default-rtdb.firebaseio.com/';

function get() {
    axios.get(firebase + 'pesvfive.json').then((response) => {
        pescount = response.data.pescount;

        updateCounter();
    });
}

function updateCounter() {
    counter.textContent = pescount;
}

downloadBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        axios
            .put(firebase + 'counter.json', {
                pescount: pescount + 1,
            })
            .then(() => {
                get();
            })
            .catch((error) => console.log(error));
    });
});

get();