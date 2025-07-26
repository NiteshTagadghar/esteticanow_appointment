import React, { useState } from 'react';
import { appointments, dashboardStats } from '../data/appointments';
import { Appointment } from '../types/appointment';
import AppointmentCard from './AppointmentCard';
import './Dashboard.css';

interface DashboardProps {
  className?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ className = '' }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getFilterCounts = () => {
    return {
      all: appointments.length,
      new: appointments.filter(a => a.status === 'New Request').length,
      upcoming: appointments.filter(a => a.status === 'Upcoming').length,
      ongoing: appointments.filter(a => a.status === 'Ongoing').length,
      completed: appointments.filter(a => a.status === 'Completed').length,
      cancelled: appointments.filter(a => a.status === 'Cancelled').length
    };
  };

  const counts = getFilterCounts();
  
  const filterOptions = [
    { label: 'All', count: counts.all, color: '#6366f1' },
    { label: 'New', count: counts.new, color: '#f59e0b' },
    { label: 'Upcoming', count: counts.upcoming, color: '#8b5cf6' },
    { label: 'Ongoing', count: counts.ongoing, color: '#06b6d4' },
    { label: 'Completed', count: counts.completed, color: '#10b981' },
    { label: 'Cancelled', count: counts.cancelled, color: '#ef4444' }
  ];

  const filteredAppointments = appointments.filter((appointment: Appointment) => {
    const matchesFilter = selectedFilter === 'All' || 
      (selectedFilter === 'New' && appointment.status === 'New Request') ||
      (selectedFilter === 'Upcoming' && appointment.status === 'Upcoming') ||
      (selectedFilter === 'Ongoing' && appointment.status === 'Ongoing') ||
      (selectedFilter === 'Completed' && appointment.status === 'Completed') ||
      (selectedFilter === 'Cancelled' && appointment.status === 'Cancelled');
    
    const matchesSearch = searchTerm === '' || 
      appointment.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.staffHandledBy.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <main className={`dashboard ${className}`}>
      <div className="dashboard-header">
        <div className="page-title-section">
          <h1 className="page-title">Appointments</h1>
          <p className="page-subtitle">Manage appointments, schedules and availability</p>
        </div>
        
        <div className="dashboard-actions">
          <button className="btn btn-outline">📤 Export</button>
          <button className="btn btn-primary">➕ New Appointment</button>
        </div>
      </div>

      <div className="stats-section">
        <h2 className="stats-title">Today's Summary</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{dashboardStats.totalToday}</div>
            <div className="stat-label">Total Today</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{dashboardStats.completed}</div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{dashboardStats.ongoing}</div>
            <div className="stat-label">Ongoing</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{dashboardStats.upcoming}</div>
            <div className="stat-label">Upcoming</div>
          </div>
          <div className="stat-card revenue">
            <div className="stat-number">₹{dashboardStats.revenue.toLocaleString()}</div>
            <div className="stat-label">Revenue</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{dashboardStats.newRequests}</div>
            <div className="stat-label">New Requests</div>
          </div>
        </div>
      </div>

      <div className="appointments-section">
        <div className="appointments-header">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for Appointments !"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-actions">
            <div className="status-filters">
              <span className="filter-label">All Status</span>
              <span className="filter-dropdown">▼</span>
            </div>
            <div className="type-filters">
              <span className="filter-label">All Types</span>
              <span className="filter-dropdown">▼</span>
            </div>
            <button className="filter-button">≡</button>
            <button className="view-toggle">⊞</button>
          </div>
        </div>

        <div className="filter-tabs">
          {filterOptions.map((filter) => (
            <button
              key={filter.label}
              className={`filter-tab ${selectedFilter === filter.label ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter.label)}
              style={selectedFilter === filter.label ? { backgroundColor: filter.color } : {}}
            >
              {filter.label} {filter.count}
            </button>
          ))}
        </div>

        <div className="appointments-grid">
          {filteredAppointments.map((appointment, index) => (
            <AppointmentCard key={`${appointment.id}-${index}`} appointment={appointment} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;