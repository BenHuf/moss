import { Outlet, Link } from "react-router-dom";
import Product from '../components/product'
export default function Shop() {
  return (
      <>
        <section className={"textSection"}>
          <h1>Shop</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <div className="productContainer">
          <Product />
        </div>
      </>
  );
}