import { Appointment, DashboardStats } from '../types/appointment';

export const appointments: Appointment[] = [
  {
    id: '#987654321',
    customerName: 'Shivani Prajapati',
    service: 'Deep Tissue Massage + Hot Stone Massage',
    date: 'Thursday 16 May',
    time: '08:00 AM',
    status: 'Completed',
    amount: 500,
    currency: '₹',
    staffHandledBy: 'Dr. Anjali Mehra',
    avatar: 'SP'
  },
  {
    id: '#987654322',
    customerName: 'Shivani Prajapati',
    service: 'Manicure, Pedicure',
    date: 'Thursday 16 May',
    time: '09:00 AM',
    status: 'New Request',
    amount: 500,
    currency: '₹',
    staffHandledBy: 'Dr. Anjali Mehra',
    avatar: 'SP'
  },
  {
    id: '#987654323',
    customerName: 'Shivani Prajapati',
    service: 'Manicure, Pedicure',
    date: 'Thursday 16 May',
    time: '10:00 AM',
    status: 'Ongoing',
    amount: 500,
    currency: '₹',
    staffHandledBy: 'Dr. Anjali Mehra',
    avatar: 'SP'
  },
  {
    id: '#987654324',
    customerName: 'Shivani Prajapati',
    service: 'Dermatology (Sessions of 7)',
    date: 'Thursday 16 May',
    time: '11:00 AM',
    status: 'Upcoming',
    amount: 500,
    currency: '₹',
    staffHandledBy: 'Dr. Anjali Mehra',
    avatar: 'SP'
  },
  {
    id: '#987654325',
    customerName: 'Shivani Prajapati',
    service: 'Facial Massage, Pedicure',
    date: 'Thursday 16 May',
    time: '12:00 PM',
    status: 'Cancelled',
    amount: 500,
    currency: '₹',
    staffHandledBy: 'Dr. Anjali Mehra',
    avatar: 'SP'
  },
  {
    id: '#987654326',
    customerName: 'Shivani Prajapati',
    service: 'Manicure, Pedicure',
    date: 'Thursday 16 May',
    time: '01:00 PM',
    status: 'New Request',
    amount: 500,
    currency: '₹',
    staffHandledBy: 'Staff not assigned',
    avatar: 'SP'
  },
  {
    id: '#987654327',
    customerName: 'Rahul Sharma',
    service: 'Hair Cut + Beard Trimming',
    date: 'Thursday 16 May',
    time: '02:00 PM',
    status: 'Completed',
    amount: 300,
    currency: '₹',
    staffHandledBy: 'Dr. Priya Singh',
    avatar: 'RS'
  },
  {
    id: '#987654328',
    customerName: 'Priya Gupta',
    service: 'Facial Treatment + Cleanup',
    date: 'Thursday 16 May',
    time: '03:00 PM',
    status: 'Upcoming',
    amount: 800,
    currency: '₹',
    staffHandledBy: 'Dr. Anjali Mehra',
    avatar: 'PG'
  },
  {
    id: '#987654329',
    customerName: 'Amit Kumar',
    service: 'Body Massage + Steam',
    date: 'Thursday 16 May',
    time: '04:00 PM',
    status: 'Ongoing',
    amount: 1200,
    currency: '₹',
    staffHandledBy: 'Dr. Rohit Verma',
    avatar: 'AK'
  },
  {
    id: '#987654330',
    customerName: 'Neha Agarwal',
    service: 'Bridal Package',
    date: 'Thursday 16 May',
    time: '05:00 PM',
    status: 'New Request',
    amount: 2500,
    currency: '₹',
    staffHandledBy: 'Staff not assigned',
    avatar: 'NA'
  },
  {
    id: '#987654331',
    customerName: 'Vikash Singh',
    service: 'Hair Styling + Color',
    date: 'Thursday 16 May',
    time: '06:00 PM',
    status: 'Cancelled',
    amount: 1500,
    currency: '₹',
    staffHandledBy: 'Dr. Priya Singh',
    avatar: 'VS'
  },
  {
    id: '#987654332',
    customerName: 'Anita Desai',
    service: 'Eyebrow Threading + Tinting',
    date: 'Thursday 16 May',
    time: '07:00 PM',
    status: 'Completed',
    amount: 400,
    currency: '₹',
    staffHandledBy: 'Dr. Anjali Mehra',
    avatar: 'AD'
  },
  {
    id: '#987654333',
    customerName: 'Suresh Patel',
    service: 'Skin Treatment + Consultation',
    date: 'Thursday 16 May',
    time: '08:00 PM',
    status: 'Upcoming',
    amount: 1800,
    currency: '₹',
    staffHandledBy: 'Dr. Rohit Verma',
    avatar: 'SP'
  },
  {
    id: '#987654334',
    customerName: 'Kavya Reddy',
    service: 'Nail Art + Extensions',
    date: 'Thursday 16 May',
    time: '09:00 PM',
    status: 'New Request',
    amount: 1000,
    currency: '₹',
    staffHandledBy: 'Staff not assigned',
    avatar: 'KR'
  },
  {
    id: '#987654335',
    customerName: 'Rajesh Jain',
    service: 'Aromatherapy + Relaxation',
    date: 'Thursday 16 May',
    time: '10:00 PM',
    status: 'Ongoing',
    amount: 2200,
    currency: '₹',
    staffHandledBy: 'Dr. Priya Singh',
    avatar: 'RJ'
  },
  {
    id: '#987654336',
    customerName: 'Deepika Malik',
    service: 'Anti-Aging Treatment',
    date: 'Thursday 16 May',
    time: '11:00 PM',
    status: 'Completed',
    amount: 3000,
    currency: '₹',
    staffHandledBy: 'Dr. Anjali Mehra',
    avatar: 'DM'
  }
];

export const dashboardStats: DashboardStats = {
  totalToday: 16,
  completed: 4,
  ongoing: 3,
  upcoming: 3,
  revenue: 21900,
  newRequests: 4
};