import axios from 'axios';

export default async function fetchImages(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '27714328-f8800d5e9a5f7cfa6f85a6657';
  const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${url}${filter}`).then(response => response.data);
}

// const axios = require('axios').default;
// class ImgsSearchApi {
//   constructor() {
//     this.BASE_URL = 'https://pixabay.com/api/';
//     this.API_KEY = '27714328-f8800d5e9a5f7cfa6f85a6657';
//     this.page = 1;
//     this.currentGalleryPoint = 0;
//     this.searchParams = new URLSearchParams({
//       key: this.API_KEY,
//       q: '',
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//       page: 1,
//       per_page: 40,
//     });
//   }
// }