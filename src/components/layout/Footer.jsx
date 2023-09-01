import React from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Burger Wali</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @mbaburgerwali</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://instagram.com/cheshta_0112">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/cheshta0112">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
