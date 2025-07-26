import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const menuSections = [
    {
      title: '',
      items: [
        { icon: '📊', label: 'Dashboards', active: false }
      ]
    },
    {
      title: '',
      items: [
        { icon: '🗓️', label: 'Appointments', active: true },
        { icon: '🛒', label: 'POS', active: false }
      ]
    },
    {
      title: '',
      items: [
        { icon: '🛍️', label: 'Services', active: false },
        { icon: '📦', label: 'Inventory', active: false }
      ]
    },
    {
      title: 'Orders',
      items: [
        { icon: '📋', label: 'Orders', active: false },
        { icon: '👥', label: 'POS Orders', active: false }
      ]
    },
    {
      title: 'Users',
      items: [
        { icon: '👤', label: 'Staff', active: false },
        { icon: '👥', label: 'Users', active: false }
      ]
    },
    {
      title: 'Offers & Promotions',
      items: [
        { icon: '🎯', label: 'Banners', active: false },
        { icon: '🎫', label: 'Coupons', active: false },
        { icon: '🎬', label: 'Reels Management', active: false },
        { icon: '📈', label: 'Analytics', active: false }
      ]
    },
    {
      title: 'Transactions & Reports',
      items: [
        { icon: '💳', label: 'Transactions', active: false },
        { icon: '📊', label: 'Sale Reports', active: false },
        { icon: '📋', label: 'Product Reports', active: false }
      ]
    }
  ];

  return (
    <aside className={`sidebar ${className}`}>
      <div className="sidebar-logo">
        <div className="logo-icon">⚪</div>
        <span className="logo-text">esteticanow</span>
      </div>
      
      <nav className="sidebar-nav">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="nav-section">
            {section.title && <div className="section-title">{section.title}</div>}
            {section.items.map((item, itemIndex) => (
              <div 
                key={`${sectionIndex}-${itemIndex}`} 
                className={`nav-item ${item.active ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                {item.active && <div className="active-indicator"></div>}
              </div>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;