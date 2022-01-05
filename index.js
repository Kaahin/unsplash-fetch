// Koppla HTML till JS
const lista = document.querySelector('#lista');
const form = document.querySelector('form');
const searchTerm = document.querySelector('#search');

// anrop till api
form.addEventListener('submit', e => {
    e.preventDefault();
    // clear innerHTML av lista 
    lista.innerHTML = '';
    getData(searchTerm.value);
});

async function getData(query) {


    // skapar en anrop till Unsplash API
    const response = await fetch (`https://api.unsplash.com/search/photos?query=${query}`, {
        headers: {
            'authorization': 'Client-ID 9f1Ffy83nc-UrsErN3_ET78k-V7QmqBIO0mB8bUzrw8'   
        }
    });

    // Data vi får tillbaka
    const data = await response.json();
    console.log(data.results);
    showPhotos(data.results);
}

const showPhotos = array => {
    array.forEach(photo => {
        const item = document.createElement('li');
        item.innerHTML =`<p>${photo.alt_description}</p><img src="${photo.urls.thumb}" alt="${photo.alt_description}">`;
        lista.appendChild(item);
    });
};