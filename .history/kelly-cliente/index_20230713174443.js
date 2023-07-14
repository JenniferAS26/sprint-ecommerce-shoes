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

   const add = document.createElement('button');
   add.innertText = "buy";

   content.append(add);

   add
   
    // const content = element.innerHTML;
});