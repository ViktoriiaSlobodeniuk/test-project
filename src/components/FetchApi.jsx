import axios from 'axios';

export async function FetchApi(endPoint) {
  const BASE_URL = `https://64464d50ee791e1e29fb5f53.mockapi.io/${endPoint}`;

  const response = await axios.get(BASE_URL);

  return response;
}
