function Header() {
  return (
    <header className="header">
      <div className="header__search">
        <i className="fa-solid fa-magnifying-glass"></i>

        <input
          type="text"
          className="header__input"
          placeholder="Procure títulos..."
        ></input>
      </div>

      <div className="header__user">
        <picture className="header__notify">
          <i className="fa-regular fa-bell"></i>
        </picture>
        <picture className="header__cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </picture>
        <picture className="header__avatar">
          <img src="assets/avatar.jpg"></img>
        </picture>

        <span className="header__username">Takashi</span>
      </div>
    </header>
  )
}

export default Header
