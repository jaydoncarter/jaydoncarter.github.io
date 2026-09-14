import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>© {new Date().getFullYear()} Jaydon Carter</span>

        <span className="footer__system">
          SYSTEM ONLINE
        </span>
      </div>
    </footer>
  );
}

export default Footer;