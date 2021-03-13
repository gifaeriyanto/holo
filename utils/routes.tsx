import { IoHandRight } from 'react-icons/io5';
import {
  RiDashboard3Line,
  RiDashboardFill,
  RiLogoutBoxRLine,
} from 'react-icons/ri';

export const routes = {
  admin: {
    dashboard: { url: '/admin', name: 'Dashboard', icon: RiDashboard3Line },
    intro: { url: '/admin/intro', name: 'Intro', icon: IoHandRight },
    items: { url: '/admin/items', name: 'Items', icon: RiDashboardFill },
    logout: { url: '/admin/logout', name: 'Logout', icon: RiLogoutBoxRLine },
  },
  client: {
    display: { url: '/display', name: 'Display' },
    home: { url: '/', name: 'Home' },
    login: { url: '/login', name: 'Login' },
    main: { url: '/main', name: 'Main' },
  },
};
