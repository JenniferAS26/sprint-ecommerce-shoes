
const Header = () => {
  const view = `
    <div class="header__nav">
      <img class="header__menu" src="./assets/images/icon-menu.svg" alt="menu" />
      <a href="/"><img class="header__logo" src="./assets/images/logo.svg" alt="logo"></a>
      <nav class="navbar">
        <ul class="navbar__items">
          <li><a href="#/" class="navbar__link">Collections</a></li>
          <li><a href="#/men/" class="navbar__link">Men</a></li>
          <li><a href="#/women/" class="navbar__link">Women</a></li>
          <li><a href="#/account/" class="navbar__link">Account</a></li>
          <li><a href="#/contact/" class="navbar__link">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="header__cart-avatar">
      <div class="header__cart">
        <div class="header__cart--counter">0</div>
        <img src="./assets/images/icon-cart.svg" alt="shopping cart icon">
      </div>
      <img class="header__avatar" src="./assets/images/image-avatar.png" alt="avatar">
    </div>
  `;
  return view;
}

export default Header;