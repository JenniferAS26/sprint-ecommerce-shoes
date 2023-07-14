const shoppingContent = document.getElementById('shoppingContent');
const cart = [];//aqui llamo al carrito, con un array vacio

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

   addToCarBtn.addEventListener('clink', ()=>{ //aqui llamo al boton del carrito
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
        id: dat.id,
        name: data.Name,
        price: dataprice,
        images:product.img, 
      });
      displayCartCounter();
    }
  });
});
   
   
    // const content = element.innerHTML;
