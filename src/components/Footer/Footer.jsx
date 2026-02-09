import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
    <span>© Developed by Max Sharpnack</span>
    <span>{new Date().getFullYear()}</span>
  </footer>
  );
}

export default Footer;
