import React from 'react'
import './Menu.css';

const Menu = () => {
  return (
    <div className='Menu'>
        <ul>

        <li className="Menu-item">
            <a className="menu-link" href="/">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div>Dashboard</div>
            </a>
        </li>

        <li className="Menu-item">
            <a className="menu-link" href="/">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div>Search</div>
            </a>
        </li>

        <li className="Menu-item">
            <a className="menu-link" href="/">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div>About</div>
            </a>
        </li>

        </ul>
    </div>
  );
}

export default Menu;