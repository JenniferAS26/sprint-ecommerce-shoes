const modalContainer = document.getElementById('modal-container');
const modalOverlay = document.getElementById('modalOvarlay');

const cartBTn = document.getElementById('cart-btn');


const displayCart = () => {
     modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";
    //modal header 
    const modalHeader = document.createElement('div');


    const modalClose = document.createElement('div');
    modalClose.innnerText = "x"
    modalClose.className = "modal-close";+
    modalHeader.append(modalClose);

    modalClose.addEventListener('click', () => {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "node";
    })

    const modalTitle = document.createElement('div');
    modalTitle.innerText = "cart";
    modalTitle.className = "modal-title"
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    //modal Body
    
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
            <div class="delete-product">X</div>
        </div>
        `;
        modalContainer.append(modalBody);
    });

     //modal footer 

     const modalFooter = do
};

cartBTn.addEventListener('click', displayCart);
