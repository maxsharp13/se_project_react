import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© {new Date().getFullYear()} WTWR</p>
    </footer>
  );
}

export default Footer;
