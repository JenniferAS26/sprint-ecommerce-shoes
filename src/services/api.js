import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
const api = 'http://localhost:3000/products';

const getData = async (id) => {
  const apiUrl = id ? `${api}/${id}` : api;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};


export { getData };