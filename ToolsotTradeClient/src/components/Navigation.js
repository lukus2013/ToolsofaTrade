import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/tools">
                    Tools
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/games">
                    My Inventory
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}
