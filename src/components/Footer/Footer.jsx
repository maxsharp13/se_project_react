import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© Developed by Max Sharpnack</p>
      <p className="footer__year">{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;