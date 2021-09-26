import { fetchApi } from './libs/fetchApi.js';
import { filteringAnArray } from './libs/filteringArray.js';

let data = await fetchApi('https://fakestoreapi.com/products');
console.log(data);

// Loading Gif
const loading = document.querySelector('.loading');

const search = document.querySelector('.search');
const searchResults = document.querySelector('.productsContainer');

search.onkeyup = function () {
	searchResults.innerHTML = '';

	let filteredArray = filteringAnArray(data, search.value);

	if (filteredArray.length === 0) {
		searchResults.innerHTML = 'This is empty';
		return;
	}

	filteredArray.forEach((element) => {
		loading.innerHTML = ``;
		document.querySelector('.productsContainer').innerHTML += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top cardsImg" src="${element.image}" />
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.price}</p>
                <a href="#" class="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
        `;
	});
};
