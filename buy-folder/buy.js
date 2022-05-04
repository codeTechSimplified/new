const main = document.querySelector('.main');
const filter = document.querySelector('.filter');
const filterOK = document.querySelector('.filter-ok');
const filterBtn = document.querySelector('.filter-button');



filterOK.addEventListener('click', () => {

    filter.style.top = '-50%';
})
filterBtn.addEventListener('click', () => {

    filter.style.top = '50%';
})