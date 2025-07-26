import React from 'react';
import { Appointment } from '../types/appointment';
import './AppointmentCard.css';

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'New Request':
        return 'status-new-request';
      case 'Ongoing':
        return 'status-ongoing';
      case 'Cancelled':
        return 'status-cancelled';
      case 'Upcoming':
        return 'status-upcoming';
      default:
        return '';
    }
  };

  const getActionButtons = (status: string) => {
    switch (status) {
      case 'Completed':
        return (
          <div className="card-actions">
            <button className="btn btn-outline">📄 Invoice</button>
            <button className="btn btn-outline">👁️ View details</button>
          </div>
        );
      case 'New Request':
        return (
          <div className="card-actions">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-outline">Decline</button>
          </div>
        );
      case 'Ongoing':
        return (
          <div className="card-actions">
            <button className="btn btn-success">Complete</button>
            <button className="btn btn-outline">👁️ View details</button>
          </div>
        );
      case 'Upcoming':
        return (
          <div className="card-actions">
            <button className="btn btn-outline">Start</button>
            <button className="btn btn-outline">Cancel</button>
          </div>
        );
      case 'Cancelled':
        return (
          <div className="card-actions">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-outline">Decline</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="appointment-card">
      <div className="card-header">
        <div className="appointment-id">{appointment.id}</div>
        <div className={`status-badge ${getStatusColor(appointment.status)}`}>
          {appointment.status}
        </div>
      </div>
      
      <div className="card-body">
        <div className="customer-info">
          <div className="customer-avatar">
            {appointment.avatar}
          </div>
          <div className="customer-details">
            <h3 className="customer-name">{appointment.customerName}</h3>
            <p className="service-name">{appointment.service}</p>
          </div>
        </div>
        
        <div className="appointment-details">
          <div className="detail-row">
            <span className="detail-icon">📅</span>
            <span className="detail-text">{appointment.date}</span>
          </div>
          <div className="detail-row">
            <span className="detail-icon">🕐</span>
            <span className="detail-text">{appointment.time}</span>
          </div>
          <div className="detail-row">
            <span className="detail-icon">💰</span>
            <span className="detail-text">
              <span className="amount-label">Cash</span>
              <span className="amount-paid">Paid</span>
              <span className="amount-value">
                {appointment.currency}{appointment.amount}
              </span>
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-icon">👤</span>
            <span className="detail-text">
              Staff Handled by: {appointment.staffHandledBy}
            </span>
          </div>
        </div>
        
        {getActionButtons(appointment.status)}
      </div>
    </div>
  );
};

export default AppointmentCard;