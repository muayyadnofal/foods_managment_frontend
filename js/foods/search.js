import('./read.js');

// search url
const SEARCH_URL = 'http://localhost/amescom_foods/api/food_desc/search.php?name=';

// select the search form elements
const form = document.getElementById('form');
const search = document.getElementById('search');

// adding the search functionality when submit
form.addEventListener('submit', e => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm.length > 0) {
        getData(SEARCH_URL + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
});