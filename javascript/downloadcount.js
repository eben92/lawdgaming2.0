const downloadBtn = document.querySelectorAll('.download');
let counter = document.querySelector('.download-count');


const firebase = 'https://counter-16c12-default-rtdb.firebaseio.com/';


function get() {
    axios.get(firebase + 'counter.json').then((response) => {
        count = response.data.count;

        updateCounter();
    })
}


function updateCounter() {
    counter.textContent = count;
}

downloadBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    
        axios.put(firebase + 'counter.json', {
                count: count + 1
            })
            .then(() => {

                get()
            })
            .catch((error) => console.log(error));


    })
})

get();