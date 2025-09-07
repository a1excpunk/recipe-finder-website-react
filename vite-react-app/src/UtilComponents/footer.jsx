import blueskyIcon from "../../public/assets/images/icon-bluesky.svg";
import instagramIcon from "../../public/assets/images/icon-instagram.svg";
import tiktokIcon from "../../public/assets/images/icon-tiktok.svg";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <p>Made with ❤️ and 🥑</p>
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram icon" /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><img src={blueskyIcon} alt="Bluesky icon" /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><img src={tiktokIcon} alt="Tiktok icon" /></a>
      </div>
    </footer>
  );
}

export default Footer;
