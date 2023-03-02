export interface IFormInput {
    email: string;
    password: string;
}

export interface FilterFormInput {
    orgName: string;
    userName: string;
    email: string;
    createdAt: string;
    phoneNumber: string | any;
    status: string;
}

export interface MenuProps {
    id: number;
    icon: string;
    name: string;
}

export interface FeaturesProps {
    id: number;
    feature: string;
    icon: string;
    total: string;
    bg: string;
}

export interface TableHeadProps {
    id: number;
    title: string;
}

export interface UserMenuProps {
    id: number;
    menuItem: string;
}

export interface UserDataProps {
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string | any;
    lastActiveDate: string;
    profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string | any;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
    },
    guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string | any;
    gender: string;
    address: string;
    },
    accountBalance: string;
    accountNumber: string;
    socials: {
    facebook: string;
    instagram: string;
    twitter: string;
    },
    education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: [ string, string ];
    loanRepayment: string;
    },
    status: string;
    id: string;
}
