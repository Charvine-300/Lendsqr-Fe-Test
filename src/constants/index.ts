import { MenuProps, UsersProps } from "../../interfaces";

//Sidebar menu icons
import User from '../assets/images/menu_icons/users.png'
import Guarantors from '../assets/images/menu_icons/guarantors.png'
import Loans from '../assets/images/menu_icons/loans.png'
import Models from '../assets/images/menu_icons/models.png'
import Savings from '../assets/images/menu_icons/savings.png'
import Requests from '../assets/images/menu_icons/requests.png'
import Whitelist from '../assets/images/menu_icons/whitelist.png'
import Karma from '../assets/images/menu_icons/karma.png'
import Briefcase from '../assets/images/menu_icons/briefcase.png'
import Products from '../assets/images/menu_icons/products.png'
import Fees from '../assets/images/menu_icons/fees.png'
import Transaction from '../assets/images/menu_icons/transaction.png'
import Services from '../assets/images/menu_icons/services.png'
import Account from '../assets/images/menu_icons/service_account.png'
import Settlement from '../assets/images/menu_icons/settlement.png'
import Report from '../assets/images/menu_icons/report.png'
import Preferences from '../assets/images/menu_icons/preferences.png'
import Pricing from '../assets/images/menu_icons/pricing.png'
import Logs from '../assets/images/menu_icons/logs.png'
import Users from '../assets/images/users.png' 
import ActiveUsers from '../assets/images/active_users.png'
import UserLoans from '../assets/images/loans.png'
import UserSavings from '../assets/images/savings.png'


//Content for sidebar menu
export const customerMenu: MenuProps[] = [
  { "id": 1, "name": "users", "icon": User },
  { "id": 2, "name": "guarantors", "icon": Guarantors },
  { "id": 3, "name": "loans", "icon": Loans },
  { "id": 4, "name": "decision models", "icon": Models },
  { "id": 5, "name": "savings", "icon": Savings },
  { "id": 6, "name": "loan requests", "icon": Requests },
  { "id": 7, "name": "whitelist", "icon": Whitelist },
  { "id": 8, "name": "karma", "icon": Karma },
];

export const businessMenu: MenuProps[] = [
  { "id": 1, "name": "organisation", "icon": Briefcase },
  { "id": 2, "name": "loan products", "icon": Requests },
  { "id": 3, "name": "savings products", "icon": Products },
  { "id": 4, "name": "fees and charges", "icon": Fees },
  { "id": 5, "name": "transactions", "icon": Transaction },
  { "id": 6, "name": "services", "icon": Services },
  { "id": 7, "name": "service account", "icon": Account },
  { "id": 8, "name": "settlements", "icon": Settlement },
  { "id": 9, "name": "reports", "icon": Report },
];

export const settingMenu: MenuProps[] = [
  { "id": 1, "name": "preferences", "icon": Preferences },
  { "id": 2, "name": "fees and pricing", "icon": Pricing },
  { "id": 3, "name": "audit logs", "icon": Logs },
];


//Content for features in dashboard


