const downloadBtn = document.querySelectorAll('.download');
let counter = document.querySelector('.download-count');

const firebase = 'https://counter-16c12-default-rtdb.firebaseio.com/';

function getFifa22V5Count() {
    axios.get(firebase + 'counter.json').then((response) => {
        count = response.data.count;

        updateCounter();
    });
}

function geteFootball22v5Count() {
    axios.get(firebase + 'pesv5.json').then((response) => {
        pesv5count = response.data.pesv5count;

        updatePesv5Counter();
    });
}

function updateCounter() {
    if (counter.classList.contains('fifav5')) {
        counter.textContent = count;
    }
}

function updatePesv5Counter() {
    if (counter.classList.contains('pes2022v5')) {
        counter.textContent = pesv5count;
    }
}

downloadBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const click = e.currentTarget;
        if (click.classList.contains('fifa22v5')) {
            axios
                .put(firebase + 'counter.json', {
                    count: count + 1,
                })
                .then(() => {
                    getFifa22V5Count();
                })
                .catch((error) => console.log(error));
        } else if (click.classList.contains('pes2022v5')) {
            // console.log('im pes');
            axios
                .put(firebase + 'pesv5.json', {
                    pesv5count: pesv5count + 1,
                })
                .then(() => {
                    geteFootball22v5Count();
                })
                .catch((err) => console.error(err));
        }
    });
});

getFifa22V5Count();
geteFootball22v5Count();