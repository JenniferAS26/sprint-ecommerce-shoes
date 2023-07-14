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

   const addToCarBtn = document.createElement('button');
   addToCarBtn.innertText = "buy";

   content.append(addToCarBtn);

   addToCarBtn.addEventListener('clink', ()=>{
    const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id)
    cart.push({
      id: product.id,
      name: product.Name,
      category: Women,
      price: price,
      images:product.img, 
    });
  });
});
   
   
    // const content = element.innerHTML;
});