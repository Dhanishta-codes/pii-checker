import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="navbar-brand text-primary d-flex align-items-center">
            <h1><b>PiiChecker</b></h1>
          </div>
          <div className="navbar-links d-flex align-items-center">
            <Link to="/home" className="text-primary text-decoration-none p-2"><h5><b>Home</b></h5></Link>
            <Link to="/about" className="text-primary text-decoration-none p-2"><h5><b>About</b></h5></Link>
          </div>
        </div>
      </nav>
    </>
  );
}
