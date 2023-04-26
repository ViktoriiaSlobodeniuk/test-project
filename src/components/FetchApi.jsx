import axios from 'axios';

const BASE_URL = 'https://64464d50ee791e1e29fb5f53.mockapi.io/users/';

export async function FetchApi(pageCount) {
  const userUrl = ` ${BASE_URL}?limit=4&page=${pageCount}`;

  const response = await axios.get(userUrl);

  return response;
}

export async function increaseFollowers(userId) {
  const userUrl = `${BASE_URL}${userId}`;
  try {
    const response = await axios.get(userUrl);
    const user = response.data;
    user.followers += 1;

    await axios.put(userUrl, user);
    console.log('Followers increased successfully!');
  } catch (error) {
    console.error(error);
  }
}

export async function decreaseFollowers(userId) {
  const userUrl = `${BASE_URL}${userId}`;
  try {
    const response = await axios.get(userUrl);
    const user = response.data;
    user.followers -= 1;

    await axios.put(userUrl, user);
    console.log('Followers decreased successfully!');
  } catch (error) {
    console.error(error);
  }
}
