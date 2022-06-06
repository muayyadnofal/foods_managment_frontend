import('./delete.js');

const API_URL = 'http://localhost/amescom_foods/api/food_group/read.php';

const main = document.getElementById('main');

// fetch group data
async function getGroups(url) {
    const res = await fetch(url);   
    return data = await res.json();
}

// show groups data __insert data object to innerHTML
function showGroups(groups) {
    main.innerHTML = '';
    groups.forEach(group => {
        const { id, description } = group;

        const groupEl = document.createElement('div');
        groupEl.classList.add('group');

        groupEl.innerHTML = ` 
        <div class="group-info">
            <h3>${description}</h3>
            <span class="group-id">${id}</span>
            <div class="overview">
                <button class="delete-btn" id="${id}">Delete group</button>
            </div>
        </div>
        `;
        main.appendChild(groupEl);
    });
}

// calling the getGroups functionality
function getD(url) {
    getGroups(url)
    .then(data => showGroups(data.food_groups))
    .then(() => fireDeleteEvent());
}

getD(API_URL);