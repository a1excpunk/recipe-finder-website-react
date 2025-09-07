import "./header.css";
import logo from "../../public/assets/images/logo.svg";
import NavBar from "./navBar.jsx";
import RecepieBrowserBtn from "./recepieBrowserBtn.jsx";
function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <NavBar></NavBar>
      <RecepieBrowserBtn></RecepieBrowserBtn>
    </header>
  );
}
export default Header;
