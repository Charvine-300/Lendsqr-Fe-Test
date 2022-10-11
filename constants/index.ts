//Sidebar menu icons
import User from '../assets/images/menu_icons/user.png'
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
import Messages from '../assets/images/menu_icons/messages.png'
import Logout from '../assets/images/menu_icons/logout.png'
import Users from '../assets/images/users.png' 
import ActiveUsers from '../assets/images/active_users.png'
import UserLoans from '../assets/images/loans.png'
import UserSavings from '../assets/images/savings.png'
import { 
  MenuProps, 
  FeaturesProps,
  TableHeadProps
} from "../interfaces";


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
  { "id": 4, "name": "systems messages", "icon": Messages },
  { "id": 5, "name": "logout", "icon": Logout },
];


//Content for features in dashboard
export const userFeatures: FeaturesProps[] = [
  { "id": 1, "feature": "users", "icon": Users, "total": "2,453", "bg": "rgba(223, 24, 255, 0.1)" },
  { "id": 2, "feature": "active users", "icon": ActiveUsers, "total": "2,453", "bg": "rgba(87, 24, 255, 0.1)" },
  { "id": 3, "feature": "users with loans", "icon": UserLoans, "total": "12,453", "bg": "rgba(245, 95, 68, 0.1)" },
  { "id": 4, "feature": "users with savings", "icon": UserSavings, "total": "102,453", "bg": "rgba(255, 51, 102, 0.1)" },
]


//Content for tabel of users
export const userTableHeads: TableHeadProps[] = [
  { "id": 1, "title": "organization" },
  { "id": 2, "title": "username" },
  { "id": 3, "title": "email" },
  { "id": 4, "title": "phone number" },
  { "id": 5, "title": "date joined" },
  { "id": 6, "title": "status" },
]
