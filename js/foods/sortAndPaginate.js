import('./read.js');

// api url's
const SORT_URL = 'http://localhost/amescom_foods/api/food_desc/sort.php?page=';
const PAGE_URL = 'http://localhost/amescom_foods/api/food_desc/paginate.php?page=';
const NUM_URL = 'http://localhost/amescom_foods/api/food_desc/read.php';

// selecting the sort checkbox and transport btns
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const sort = document.querySelector('#sort');

// counter to move between the pages
let counter = 1;
var nbHits = 0;

// get the status of the checkbox and call sort function by it's status
sort.addEventListener('change', e => getSorted());

// sort if checked 
function getSorted() {
    if(sort.checked) getData(SORT_URL + counter);
    else getData(PAGE_URL + counter);
}

getPageNum(NUM_URL)
    .then(data => nbHits = data.nbHits)
    .then(addNextEvent)
    .then(addBackEvent)


// move foreword button __adding the event tom move
function addNextEvent() {
    next.addEventListener('click', e => {
        e.preventDefault();
    
        if(counter++ >= nbHits) {
            counter = 1;
        } else {
            getSorted();
        }
    });
}

// move backward button __adding the event tom move
function addBackEvent() {
    prev.addEventListener('click', e => {
        e.preventDefault();
    
        if(counter-- <= 1 ) {
            counter = 1;
        } else {
            getSorted();
        }
    });
}

async function getPageNum(url) {
    const res = await fetch(url);
    return await res.json();
}  