// src/components/Layout/PageContainer.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function PageContainer({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="page-container">
      {/* only show hamburger when sidebar is closed */}
      {!sidebarOpen && (
        <button
          className="hamburger-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      )}

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main-content">
        <Topbar />  {/* your existing topbar */}
        {children}
      </div>
    </div>
  );
}
