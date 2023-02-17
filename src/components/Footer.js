import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { IconContext } from "react-icons";
function Footer() {
  const style = { color: "white", fontSize: "1.5em" };
  return (
    <footer>
      <span>2023 all right reserved</span>
      <div className="footer-icon">
        <BsFacebook size={30} />
        <AiOutlineTwitter size={30} />
        <IoLogoLinkedin size={30} />
      </div>
    </footer>
  );
}

export default Footer;
