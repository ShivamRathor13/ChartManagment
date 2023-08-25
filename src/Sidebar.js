import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-dark text-white p-3 vh-100 d-flex flex-column align-items-center ">
      <h4 className="mb-4">Menu</h4>
      <ul className="list-unstyled">
        <li>
          <Link to="/Contact" className="text-white text-decoration-none">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/chart" className="text-white text-decoration-none">
            Chart
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
