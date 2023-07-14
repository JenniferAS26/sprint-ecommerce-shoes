//contenedores padres que van a contener el modal del carrito
const modalContainer = document.getElementById('modal-container');
const modalOverlay = document.getElementById('modalOvarlay');
const cartBTn = document.getElementById('cart-btn');
const cartCounter = document.getElementById('cart-counter');


const displayCart = () => { //funcion para el modal
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";
    //modal header 
    const modalHeader = document.createElement('div');


    const modalClose = document.createElement('div');//se crea modal de cierre interno
    modalClose.innnerText = "❌"
    modalClose.className = "modal-close";+
    modalHeader.append(modalClose);//conectamos el modal de cierre

    modalClose.addEventListener('click', () => {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "node";
    })

    const modalTitle = document.createElement('div');//modal del carrito
    modalTitle.innerText = "cart";
    modalTitle.className = "modal-title"
    modalHeader.append(modalTitle);// se conecta este modal title con modal header

    modalContainer.append(modalHeader);//conecion del modal princippal

    //modal Body

    if(cart.length > 0){
    cart.forEach((product)=> {
        const modalBody = document.createElement('div');
        modalBody.className = "modal-body"
        modalBody.innerHTML = `
        <div class="product">
          <img class= "product-img" src="${product.img}" />
          <div class="product-info">
            <h4>${product.productName}</h4>
          </div> 
          <div class="quantity">
             <pan class ="quantity-btn-decrese">-</pan>
             <pan class ="quantity-btn-input">${product.quanty}</pan>   
             <pan class ="quantity-btn-increse">+</pan>  
          </div>
            <div class="price">${product.price * product.quanty} $</div>
            <div class="delete-product">❌</div>
        </div>
        `;
        modalContainer.append(modalBody);

        const decrese = modalBody.querySelector('quantity-btn-decrese');
        decrese.addEventListener("click", ()=>{
            if(product.quanty !== 1){
                product.quanty--;
            displayCart();
            displayCartCounter();
            }
        });

        const increse = modalBody.querySelector('quantity-btn-increse');
        increse.addEventListener("click", ()=>{
            product.quanty++;
            displayCart();
            displayCartCounter();
        });
        //delete
        const deleteProduct = modalBody.querySelector(".delete-product");
        
        deleteProduct.addEventListener('click', ()=>{
            deleteCartProduct(product.id);
        })
    });

     //modal footer 
     const total = cart.reduce((acc, product) => acc + product.price * productquanty, 0);

     const modalFooter = document.createElement("div");
     modalFooter.className = "modal-footer"
     modalFooter.innerHTML = `
     <div class="total-price">Total: ${total}</div
     
     `;
     modalContainer.append(modalFooter)
    }else {
        const modalText = document.createElement('h2');
        modalText.className = "modal-body";
        modalText.innerText = "your cart is empty"
        modalContainer.append(modalText);
  }
};

cartBTn.addEventListener('click', displayCart);

const deleteCartProduct = (id) => {
    const founId = cart.findIndex((element)=> element.id === id);
    console.log(founId);
    cart.splice(founId , 1);
    displayCart();
    displayCartCounter();
};

const displayCartCounter = () => {
    const cartLength = cart.reduce((acc, product) => acc +  productquanty, 0);
    if(cartLength > 0){
        cartCounter.style.display ="block";
        cartCounter.innerText = cartLength;
    }else{
        cartCounter.style.display = "none";
    }
};
