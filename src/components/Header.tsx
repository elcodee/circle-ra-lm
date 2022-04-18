import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-main header-dark fixed-top">
      {/* End Top Header */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img
              className="logo-light"
              src="/img/logo.png"
              alt="ra-logo"
              width={45}
              style={{ marginLeft: 15 }}
            />
            <img
              className="logo-dark"
              src="/img/logo.png"
              alt="ra-logo"
              width={45}
              style={{ marginLeft: 15 }}
            />
          </a>
          {/* Logo */}
          {/* Mobile Toggle */}
          <button
            className="navbar-toggler ms-auto me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* End Mobile Toggle */}
          {/* Menu */}
          <div
            className="collapse navbar-collapse one-page-nav"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="/member" className="nav-link">
                  Member
                </a>
              </li>

              <li className="nav-item">
                <a href="/rules" className="nav-link">
                  Rules
                </a>
              </li>
              <li className="nav-item">
                <a href="/ra-thr" className="nav-link">
                  Bagi-Bagi THR
                </a>
              </li>
            </ul>
          </div>
          {/* End Menu */}
          {/* <div className="nav flex-column flex-lg-row d-none d-lg-flex">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a href="#" className="btn nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="btn btn-sm btn-primary mb-0 mx-2 text-nowrap"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </header>
  );
}
