import axios from 'axios';

export async function FetchApi(pageCount) {
  const BASE_URL = `https://64464d50ee791e1e29fb5f53.mockapi.io/users?limit=4&page=${pageCount}`;

  const response = await axios.get(BASE_URL);

  return response;
}

// const url = new URL('https://64464d50ee791e1e29fb5f53.mockapi.io');
// url.pathname = '/tasks'; // задаємо шлях до ресурсу
// url.searchParams.append('page', 1); // додаємо параметр "page=1"
// url.searchParams.append('limit', 3); // додаємо параметр "limit=3"
// console.log(url.href); // виводимо сформований URL
// // https://64464d50ee791e1e29fb5f53.mockapi.io/tasks?page=1&limit=3
