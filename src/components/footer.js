import React from "react";
import "./footer.css"
import "./SocialIcons"
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <div id="footer">
        <div className="footer" id="footer-content">
            <div><span id="title">WRI di Sosial Media</span></div><br/><br/>
            <div className="socials">
                <SocialIcons/>
            </div>
        </div>
        <div className="container-fluid" id="copyright">
            &copy; Workshop dan Riset Informatika {(new Date().getFullYear())}
        </div>
    </div>
  );
}

export default Footer;