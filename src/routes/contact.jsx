import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Email from "../assets/email.png";
import Phone from "../assets/phone.png";
import Nav from "../assets/nav.png";

export default function Contact() {
  return (
      <>
        <section className={"textSection"}>
          <h1>Contact</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className={"sectionHeading"}>~ Please reach out with any questions or concerns ~</p>
          <div className={"contactHolder"}>
            <div className={"infoHolder"}>
              <img src={Email} alt={"Email icon"} className={"icon"}/>
              <p className={"infoText"}>anna@email.com</p>
            </div>
            <div className={"infoHolder"}>
              <img src={Phone} alt={"Phone icon"} className={"icon"}/>
              <p className={"infoText"}><span>Phone</span> 555.555.5555</p>
            </div>
            <div className={"infoHolder"}>
              <img src={Nav} alt={"Nav icon"} className={"icon"}/>
              <p className={"infoText"}><span>Location</span> North Carolina Based.</p>
            </div>
          </div>
        </section>
      </>
  );
}