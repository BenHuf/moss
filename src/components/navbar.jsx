import {Link, Navigate, Route, Routes} from "react-router-dom";

export default function Navbar() {
  return (
      <>
        <header className="header">
          <nav id="navbar" className="navigation" role="navigation">
            <Link to={"/"} id="Logo">The Mossy Lantern</Link>
            <input id="toggle" type="checkbox"/>
            <label className="dropdown" htmlFor="toggle">
              <div className="top"></div>
              <div className="mid"></div>
              <div className="bottom"></div>
            </label>

            <nav className="menu">
              <Link to={`Shop`} className="navlink">Shop</Link>
              <Link to={`About`} className="navlink">About</Link>
              <Link to={`Contact`} className="navlink">Contact</Link>
            </nav>
          </nav>
        </header>
      </>
  );
}