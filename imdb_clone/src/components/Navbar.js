import React from "react";
import "./Navbar.css"
function Navbar() {
  return (
    <div className="nav-container">
      <img
        className="nav-logo"
        src="data:image/jpeg;base64,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"
      alt=""/>
      <div className="nav-movies">Movies</div>
      <div className="nav-fav">Favourites</div>
    </div>
  );
}

export default Navbar;
