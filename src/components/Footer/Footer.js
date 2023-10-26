import React from "react";
import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";
import { useSelector } from "react-redux";

const Footer = () => {
  const user = useSelector((state) => state.amazon.userInfo);
  console.log(user);
  return (
    <div className="font-titleFont">
      {!user && <FooterTop />}

      <FooterMiddle />
      <FooterBottom />
    </div>
  );
};

export default Footer;
