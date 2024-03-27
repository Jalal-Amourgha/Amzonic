import { footerLinks, socials } from "../constants";
import { qrCode, googlePlay, appStore } from "../assets/icons";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer
      className={`py-8 bg-black text-white ${
        pathname !== "/" ? "mt-[150px]" : ""
      }`}
    >
      <div className="container">
        <div className="grid sm:grid-cols-3  lg:grid-cols-3 xl:grid-cols-5 gap-x-3">
          <div className="mb-4">
            <h1 className="text-xl font-medium mb-4">Amazonic</h1>
          </div>
          {footerLinks.map((section) => (
            <div key={section.label} className="mb-4">
              <h1 className="text-xl font-medium mb-4">{section.label}</h1>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.value}
                    className="text-[#FAFAFA] cursor-pointer my-5"
                  >
                    {link.value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mb-4">
            <h1 className="text-xl font-medium mb-4">Download</h1>
            <p className="text-gray">Save $3 with App New User Only</p>
            <div className="flex mt-3">
              <div className="mr-2">
                <img src={qrCode} alt="qrcode" />
              </div>
              <div>
                <img src={googlePlay} className="mb-3" alt="google play img" />
                <img src={appStore} alt="App Store img" />
              </div>
            </div>
            <div className="mt-6">
              {socials.map((social) => (
                <i
                  key={social.label}
                  className={`${social.icon} text-2xl mr-5 cursor-pointer`}
                ></i>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-[#6f6f6f]">
        <p className="text-[#6f6f6f] pt-3">
          &copy; Copyright 2024. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
