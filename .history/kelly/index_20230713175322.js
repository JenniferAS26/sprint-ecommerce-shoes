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
    cart.push({
      id: product.id,
      name: product.Name,
      category: "Women",
      "price": price,
      "brand": "Skechers",
      
      "images": 
    },)
   })
   });
   
   
    // const content = element.innerHTML;
});