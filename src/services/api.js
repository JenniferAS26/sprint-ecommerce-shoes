const api = 'http://localhost:3000/products';

const getData = async (id) => {
  const apiUrl = id ? `${api}/${id}` : api;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};


export { getData };