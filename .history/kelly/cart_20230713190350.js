const modalContainer = document.getElementById('modal-container');
const modalOverlay = document.getElementById('modalOvarlay');


const displayCart = () => {
    //modal header 
    const modalHeader = document.createElement('div');


    const modalClose = document.createElement('div');
    modalClose.innnerText = "x"
    modalClose.className = "modal-close";+
    modalHeader.append(modalClose);

    const modalTitle = document.createElement('div');
    modalTitle.innerText = "cart";
    modalTitle.className = "modal-title"
    modalHeader.append()
}
