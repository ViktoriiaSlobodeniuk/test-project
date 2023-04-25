import axios from 'axios';

export async function FetchApi(pageCount) {
  const BASE_URL = `https://64464d50ee791e1e29fb5f53.mockapi.io/users?limit=4&page=${pageCount}`;

  const response = await axios.get(BASE_URL);

  return response;
}
