import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./search";

export function Header(): React.ReactElement {
  return (
    <nav className="navbar navbar-dark dark bg-secondary shadow">
      <Link className="navbar-brand text-center ls" to="/">
        <h3>WOOKIE</h3>
        <h3>MOVIES</h3>
      </Link>

      <div className="ml-auto">
        <Search />
      </div>
    </nav>
  );
}
