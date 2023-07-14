const modalContainer = document.getElementById('modal-container');
const modalOverlay = document.getElementById('modalOvarlay');

const cartBTn = document.getElementById('cart-btn');


const displayCart = () => {
    modal
    //modal header 
    const modalHeader = document.createElement('div');


    const modalClose = document.createElement('div');
    modalClose.innnerText = "x"
    modalClose.className = "modal-close";+
    modalHeader.append(modalClose);

    const modalTitle = document.createElement('div');
    modalTitle.innerText = "cart";
    modalTitle.className = "modal-title"
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

};

cartBTn.addEventListener('click', displayCart);
