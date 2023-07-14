const shoppingContent = document.getElementById('shoppingContent');
const cart = [];//aqui llamo al carrito, con un array vacio

//aqui el usuario esta ingresando los productos y //recorrer el array de productos
products.forEach((product) => {  
    const  content = document.createElement('div');//creo un elelemnto div y lo que sigue creo contenido html y creo su contenido
    content.innerHTML = `  
      <img src="${product.img}"> 
      <h3>${product.Name}</h3>
      <p>${product}.price} $</p>
    `;
    shoppingContent.append(content); //aqui conecto con la const principal shoppingContent

   const addToCarBtn = document.createElement('button'); //creo boton de compra
   addToCarBtn.innertText = "add To";

   content.append(addToCarBtn);//aqui conecto el boton con el contenedor pradre

   addToCarBtn.addEventListener('clink', ()=>{ //aqui llamo al boton del carrito
    const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);//con este metodo le digo que si ve producto repetido no me lo muestre repetido

    if(repeat){
      cart.map((prod)=>{
        if(prod.id === product.id){
          prod.quanty++;//propiedad quanty la busca y apartir de ahi suma
          displayCartCounter();
        }
      });
    }else {
      cart.push({ //aqui empujo los datos de los productos
        id: product.id,
        name: product.Name,
        price: product.price,
        images:product.img, 
      });
      console.log(cart);
      displayCartCounter();
    }
  });
});

   
   
    // const content = element.innerHTML;
