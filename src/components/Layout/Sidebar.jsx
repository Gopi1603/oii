// src/components/Layout/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/Sidebar.css';
import logoSrc from '../../logo.svg';

const navItems = [
  { label: 'Dashboard', iconClass: 'icon-dashboard', to: '/dashboard' },
  { label: 'Events',    iconClass: 'icon-calendar',  to: '/events'    },
  { label: 'Messages',  iconClass: 'icon-message',   to: '/messages'  },
  { label: 'Members',   iconClass: 'icon-users',     to: '/members'   },
];

export default function Sidebar({ isOpen, onClose }) {
  const { pathname } = useLocation();

  return (
    <aside className={`sidebar${isOpen ? ' sidebar--open' : ''}`}>
      <div className="sidebar__header">
        <Link to="/" className="sidebar__logo-link">
          <img src={logoSrc} alt="Springer Home" className="sidebar__logo-img" />
        </Link>
        <button className="sidebar__close-btn" onClick={onClose} aria-label="Close menu">
          ×
        </button>
      </div>

      <nav className="sidebar__nav">
        <ul>
          {navItems.map(({ label, iconClass, to }) => {
            const isActive = pathname === to;
            return (
              <li
                key={to}
                className={`sidebar__nav-item${isActive ? ' sidebar__nav-item--active' : ''}`}
              >
                <Link to={to} className="sidebar__nav-link">
                  <span className={`sidebar__nav-icon ${iconClass}`} />
                  <span className="sidebar__nav-label">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar__spacer" />

      <div className="sidebar__profile">
        <img
          src="https://avatar.iran.liara.run/public"
          alt="Gopi Chakradhar"
          className="sidebar__avatar"
        />
        <div className="sidebar__profile-info">
          <span className="sidebar__profile-name">Gopi Chakradhar</span>
          <span className="sidebar__profile-email">121cs0050@iiitk.ac.in</span>
        </div>
      </div>
    </aside>
  );
}
