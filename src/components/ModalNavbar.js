const ModalNavbar = () => {
  const view = `
    <div class="modal-navbar__background">
      <nav class="modal-navbar">
        <img class="modal-navbar__close-icon" src="./assets/images/icon-close.svg" alt="close">
        <ul class="modal-navbar__items">
          <li><a href="#/" class="navbar__link">Collections</a></li>
          <li><a href="#/men/" class="navbar__link">Men</a></li>
          <li><a href="#/women/" class="navbar__link">Women</a></li>
          <li><a href="#/account/" class="navbar__link">Account</a></li>
          <li><a href="#/contact/" class="navbar__link">Contact</a></li>
        </ul>
      </nav>
    </div>
  `
  return view;
}

export default ModalNavbar;