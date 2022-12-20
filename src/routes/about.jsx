import { Outlet, Link } from "react-router-dom";

export default function About() {
  return (
      <>
        <section className="textSection">
          <h1>About The Artist</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className={"sectionHeading"}>Pictures/Artwork/Whatevs</p>
          <div className={"contactHolder"}>
            <p>Include pics of you/your work etc</p>
            <div>  ~    </div>
            <div>    ~  </div>
            <div>  ~    </div>
            <div>~      </div>
            <p>Pictures</p>
            <div>  ~    </div>
            <div>    ~  </div>
            <div>  ~    </div>
            <div>~      </div>
            <p>More Pictures</p>
            <div>  ~    </div>
            <div>    ~  </div>
            <div>  ~    </div>
            <div>~      </div>
            <p>You get the idea</p>
          </div>
        </section>
      </>
  );
}