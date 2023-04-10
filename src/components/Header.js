import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Blogs",
      path: "/blog",
    },
    {
      id: 3,
      name: "Add Blog",
      path: "/add-blog",
    },
  ];
  return (
    <header>
      <nav>
        <div className="nav-container">
          <div className="nav-logo">
            <h1>Blog</h1>
          </div>
          <ul className="nav-list">
            {links?.map((link) => (
              <li key={link?.id} className="nav-link">
                <Link to={link?.path}>{link?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
