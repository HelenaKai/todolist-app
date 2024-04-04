import "./Header.css";
import logo from "../../images/icons8-todo-list-50.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img
          className="header__logo"
          src={logo}
          alt="Логотип-иконка приложения Список дел"
        />
        <h1 className="header__title">Список задач</h1>
      </div>
    </header>
  );
}
export default Header;
