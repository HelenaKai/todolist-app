import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyrigth">
          &copy; {new Date().getFullYear()} &nbsp; Elena Kainarova
        </p>
        <a href="####" className="footer__nav-link">
          Политика в отношении обработки персональных данных
        </a>
      </div>
    </footer>
  );
}
