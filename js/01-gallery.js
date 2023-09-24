import { galleryItems } from './gallery-items.js';
// // Change code below this line
const basicLightbox = require('basiclightbox');

import * as basicLightbox from 'basiclightbox';



const listEl = document.querySelector('.gallery')



const typset = galleryItems.map(({ preview, original, description }) => { return `<li><img src="${preview}" alt="${description}"></li>` }).join('')
const bigTypset = galleryItems.map(({ original, description }) => `<img src = "${original}" alt = "${description}">`);

listEl.insertAdjacentHTML("beforeend", typset)



document.querySelector('li').addEventListener('click', () => {
    basicLightbox.create(bigTypset)
})