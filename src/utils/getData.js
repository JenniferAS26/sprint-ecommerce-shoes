const api = 'http://localhost:3000/products';

const getData = async (id) => {
  const apiURL = id ? `${api}/${id}` : api;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch error: ', error);
  };
};

export default getData;