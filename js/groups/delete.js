const DELETE_URL = 'http://localhost/amescom_foods/api/food_group/delete.php?id=';

// delete event for all btns
function fireDeleteEvent() {
    const btns = document.querySelectorAll('.delete-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', deleteEvent);
    });
}

// delete group when the delete-btn clicked
function deleteEvent(element) {
    deleteData(DELETE_URL + element.target.id);
    window.location.reload();
}

// delete data from the given url
async function deleteData(url) {
    await fetch(url, { method: 'DELETE' });
}
