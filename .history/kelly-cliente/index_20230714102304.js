const shoppingContent = document.getElementById('shoppingContent');
const cart = [];//a

products.forEach((product) => {  //recorrer el array de productos
    const  content = document.createElement('div');//creo un elelemnto div y lo que sigue creo contenido html y creo su contenido
    content.innerHTML = `  
      <img src="${data.img}"> 
      <h3>${data.Name}</h3>
      <p>${data}.price} $</p>
    `;
    shoppingContent.append(content); //aqui conecto con la const principal shoppingContent

   const addToCarBtn = document.createElement('button'); //creo boton de compra
   addToCarBtn.innertText = "add To";

   content.append(addToCarBtn);//aqui conecto el boton con el contenedor pradre

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
