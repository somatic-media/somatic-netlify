import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/osclasswizards_logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
  <div className="container is-centered">
  <p className="welcome_text">
    Welcome Text
  </p>
  </div>  
  <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '300px' }}></img>
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="button is-primary is-cta"
          href="https://mumslocalquarter.com.au/post-a-listing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">
            Post A Listing
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
