const downloadBtn = document.querySelectorAll(".download");
let counter = document.querySelector(".download-count");

const firebase = "https://counter-16c12-default-rtdb.firebaseio.com/";

function getFifa22V5Count() {
  axios.get(firebase + "counter.json").then((response) => {
    count = response.data.count;

    updateCounter();
  });
}

function geteFootball22v5Count() {
  axios.get(firebase + "pesv5.json").then((response) => {
    pesv5count = response.data.pesv5count;

    updatePesv5Counter();
  });
}

function getCof2022Count() {
  axios.get(firebase + "COF2022.json").then((response) => {
    cof22count = response.data.cof22count;

    updateCOF2022Counter();
  });
}

function updateCounter() {
  if (counter.classList.contains("fifav5")) {
    counter.textContent = count;
  }
}

function updatePesv5Counter() {
  if (counter.classList.contains("pes2022v5")) {
    counter.textContent = pesv5count;
  }
}

function updateCOF2022Counter() {
  if (counter.classList.contains("cof2022")) {
    counter.textContent = cof22count;
  }
}

downloadBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const click = e.currentTarget;
    if (click.classList.contains("fifa22v5")) {
      axios
        .put(firebase + "counter.json", {
          count: count + 1,
        })
        .then(() => getFifa22V5Count())
        .catch((error) => console.log(error));
    } else if (click.classList.contains("pes2022v5")) {
      // console.log('im pes');
      axios
        .put(firebase + "pesv5.json", {
          pesv5count: pesv5count + 1,
        })
        .then(() => geteFootball22v5Count())
        .catch((err) => console.error(err));
    } else if (click.classList.contains("cof2022")) {
      axios
        .put(firebase + "COF2022.json", {
          cof22count: cof22count + 1,
        })
        .then(() => getCof2022Count())
        .catch((err) => console.error(err));
    }
  });
});

getFifa22V5Count();
geteFootball22v5Count();
getCof2022Count();
