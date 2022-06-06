import('./read.js');

const CREATE_URL = 'http://localhost/amescom_foods/api/food_group/create.php';

const form = document.getElementById('form');
const create = document.getElementById('add');

// create data event
form.addEventListener('submit', e => {
    e.preventDefault();

    const createTerm = create.value;

    if(createTerm && createTerm.length > 0) {
        postData(CREATE_URL, { description: create.value });
        create.value = '';
    } else {
        window.location.reload();
    }
    getD(API_URL);
});

// create group function
async function postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }