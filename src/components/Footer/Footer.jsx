import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer md:px-44 items-center p-4 bg-slate-300 text-neutral-content">
        <aside className="items-center grid-flow-col">
          <img width={100} src="/image/logo.png" alt="" />
        </aside>
          <p className="text-black md:ms-52 md:mt-10">Copyright © 2023 - All right reserved</p>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end"> 
        <a href="https://www.facebook.com/profile.php?id=100063802162738"><FaFacebook className="text-blue-600" size={25}></FaFacebook></a>
          <FaYoutube className="text-red-600" size={25}></FaYoutube>
          <FaTwitter className="text-blue-500" size={25}></FaTwitter>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
