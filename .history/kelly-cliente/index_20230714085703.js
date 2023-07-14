const shoppingContent = document.getElementById('shoppingContent');
const cart = [];

products.forEach((product) => {  //recorrer el array de productos
    const  content = document.createElement('div');//creo un elelemnto div y lo que sigue creo contenido html y creo su contenido
    content.innerHTML = `  
      <img src="${product.img}"> dame la 
      <h3>${product.Name}</h3>
      <p>${product.price} $</p>
    `;
    shoppingContent.append(content);

   const addToCarBtn = document.createElement('button');
   addToCarBtn.innertText = "buy";

   content.append(addToCarBtn);

   addToCarBtn.addEventListener('clink', ()=>{
    const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

    if(repeat){
      cart.map((prod)=>{
        if(prod.id === product.id){
          prod.quanty++;
          displayCartCounter();
        }
      });
    }else {
      cart.push({
        id: product.id,
        name: product.Name,
        category: Women,
        price: price,
        images:product.img, 
      });
      displayCartCounter();
    }
  });
});
   
   
    // const content = element.innerHTML;
