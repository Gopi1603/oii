// src/components/Layout/Topbar.jsx
import React from 'react';
import '../../styles/components/Topbar.css';

const Topbar = ({ onHamburger }) => (
  <header
    className="topbar"
    style={{
      background: 'var(--bg-white)',
      padding: '16px 24px',
      borderBottom: '1px solid var(--border-light)',
      display: 'flex',
      alignItems: 'center'
    }}
  >
    {/* Hamburger for mobile */}
    <button
      className="topbar__hamburger"
      onClick={onHamburger}
      aria-label="Toggle menu"
      style={{
        fontSize: '24px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        marginRight: '16px'
      }}
    >
      ☰
    </button>
    {/* TODO: Breadcrumb & Controls */}
  </header>
);

export default Topbar;
