import blueskyIcon from "../../public/assets/images/icon-bluesky.svg";
import instagramIcon from "../../public/assets/images/icon-instagram.svg";
import tiktokIcon from "../../public/assets/images/icon-tiktok.svg";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <p>Made with ❤️ and 🥑</p>
      <div className="social-icons">
        <img src={instagramIcon} alt="Instagram icon" />
        <img src={blueskyIcon} alt="Bluesky icon" />
        <img src={tiktokIcon} alt="Tiktok icon" />
      </div>
    </footer>
  );
}

export default Footer;
