import dashboard from './dashboard';
import application from './application';
import support from './support';
import { NavItemType } from 'types';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
    items: [dashboard, application, support]
};

export default menuItems;
