import { fetchApi } from './libs/fetchApi.js';

import { filteringAnArray } from './libs/filteringArray.js';

let data = await fetchApi('https://fakestoreapi.com/products');
console.log(data);

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
        <div class="cards">
            <h5>${element.title}</h5>
            <p>${element.id}</p>
            <p>${element.price}</p>
            <img class="cardImg" src="${element.image}"/>
        </div>
        `;
	});
};
