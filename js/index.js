const sectionTitle = document.getElementsByTagName('h2');
sectionTitle[0].id = 'top-players';
sectionTitle[1].id = 'top-blogs';
document.getElementById('top-players').style.color = "orange";
document.getElementById('top-blogs').style.color = "green";

const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = 'rgba(10,122,102,0.15)';
}

document.getElementById('item-btn').addEventListener('click', function () {
    const newItem = document.createElement('li');
    newItem.innerText = Math.round(Math.random() * 100);
    const ul = document.getElementById('list');
    ul.appendChild(newItem);
});

function increaseValue() {
    const inputField = document.getElementById('input-field');
    const inputValue = parseInt(inputField.value);
    const updatedValue = inputValue + 1;
    inputField.value = updatedValue;
    if (updatedValue == 5) {
        document.getElementById('increase-btn').disabled = true;
    }
}