// api nut data url
const NUT_URL = 'http://localhost/amescom_foods/api/nut_data/read.php?id=';

// select the open & close btns for the nut popup
const openNutButton = document.querySelector('.info-btn');
const closeNutButton = document.querySelector('.close-button');
// select the overlay for the inter page
const overlay = document.getElementById('overlay');
const nut_body = document.querySelector('.nut-body');

// info btn event to fire when click __show the popup
function openEvent(element) {
    // get the nut data for a food when clicking
    getNutData(NUT_URL + element.target.id);
    const nut_info = document.querySelector('.nut-info');
    openInfo(nut_info);
}

// adding the pop scale to show up on the screen when clicking the info btn
function fireOpenEvent() {
    const btns = document.querySelectorAll('.info-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', openEvent);
    });
}

closeNutButton.addEventListener('click', closeEvent);

// close btn event to fire when click __remove the popup
function closeEvent() {
    const nut_info = document.querySelector('.nut-info');
    closeInfo(nut_info);
}   

//adding the active class to the style of the popup and overlay 
function openInfo(nut_info) {
    if(nut_info == null) return;

    nut_info.classList.add('active');
    overlay.classList.add('active');
}

//removing the active class to the style of the popup and overlay 
function closeInfo(nut_info) {
    if(nut_info == null) return;
    nut_info.classList.remove('active');
    overlay.classList.remove('active');
}

async function getNutData(url) {
    const res = await fetch(url);
    const data = await res.json();
    showNuts(data.nut);
}

function showNuts(nut) {
    nut_body.innerHTML = '';

    const { carbohydrate, energy, caffeine, theobromine, sugar } = nut;

    nut_body.innerHTML = `
    <h4>Carbohydrate, by difference: <span>${carbohydrate}</span></h4>
    <h4>Energy: <span>${energy}</span></h4>
    <h4>Caffeine: <span>${caffeine}</span></h4>
    <h4>Theobromine: <span>${theobromine}</span></h4>
    <h4>Sugar, total: <span>${sugar}</span></h4>`;  
}