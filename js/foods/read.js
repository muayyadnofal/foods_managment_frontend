import('./read-info.js');

// api paginate url
const API_URL = 'http://localhost/amescom_foods/api/food_desc/paginate.php';

// select main element
const main = document.getElementById('main');

// get food data function 
function getData(url) {
    getFoods(url)
        .then(data => showFoods(data.food))
        // open event is the info overview button
        .then(() => fireOpenEvent());
}

// get foods data function
async function getFoods(url) {
    const res = await fetch(url);
    return await res.json();
}

// inserting the html elements to the main by the number of foods
function showFoods(foods) {
    main.innerHTML = '';

    foods.forEach(food => {
        const { id, description } = food;

        const foodEl = document.createElement('div');

        foodEl.classList.add('food');

        foodEl.innerHTML = ` 
        <img src="../images/sandwich.png">
            <div class="food-info">
                <h3>${description}</h3>

                <span class="food-id">${id}</span>

                <div id="ass" class="overview">
                    <button class="info-btn" id=${id}>info</button>
                </div>
            </div>
        `;
        main.appendChild(foodEl);
    });
}

getData(API_URL);
