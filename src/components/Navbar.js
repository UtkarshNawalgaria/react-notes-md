import React from "react";
import { Link, useRouteMatch } from "react-router-dom";


const Navbar = () => {
const { path } = useRouteMatch();
  return (
    <header>
      <div className="flex justify-between py-4">
        <div>
          <h1>Logo</h1>
          <p>Current Path: {path}</p>
        </div>
        <div>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin">My Notes</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
