import React from 'react'

const Header = () => (
  <nav id="nav">
    <span>DK</span>
    <ul className="nav-links">
      <li>About</li>
      <li>Projects</li>
      <li>Blog</li>
      <li>Resume</li>
    </ul>
    <style jsx>{`
      #nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .nav-links {
        display: flex;
        list-style: none;
        flex-grow: 1;
        justify-content: space-evenly;
      }
    `}</style>
  </nav>
)

export default Header
