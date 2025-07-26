export interface Appointment {
  id: string;
  customerName: string;
  service: string;
  date: string;
  time: string;
  status: 'Completed' | 'New Request' | 'Ongoing' | 'Cancelled' | 'Upcoming';
  amount: number;
  currency: string;
  staffHandledBy: string;
  avatar: string;
}

export interface DashboardStats {
  totalToday: number;
  completed: number;
  ongoing: number;
  upcoming: number;
  revenue: number;
  newRequests: number;
}