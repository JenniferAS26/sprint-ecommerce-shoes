const shoppingContent = document.getElementById('shoppingContent');
const cart = [];

products.forEach((product) => {
    const  content = document.createElement('div');
    content.innerHTML = `
      <img src="${product.img}">
      <h3>${product.Name}</h3>
      <p>${product.price} $</p>
    `;
    shoppingContent.append(content);

   const addToCar = document.createElement('button');
   addToCar.innertText = "buy";

   content.append(addToCar);

   addToCar
   
    // const content = element.innerHTML;
});