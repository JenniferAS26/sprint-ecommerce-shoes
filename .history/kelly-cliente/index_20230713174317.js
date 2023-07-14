const shoppingContent = document.getElementById('shoppingContent');
const cart = []

products.forEach((product) => {
    const  content = document.createElement('div');
    content.innerHTML = `
      <img src="${product.img}">
      <h3>${product.Name}</h3>
      <p>${product.price} $</p>
    `;
    shoppingContent.append(content);

   const addToButton = document.createElement('button');
   addToButton.innertText = "buy";

   content.append(addToButton)
   
    // const content = element.innerHTML;
});