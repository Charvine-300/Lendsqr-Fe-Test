import { createContext } from "react";
import { UserDataProps } from "./interfaces"

//Initializing context API for application
export const CurrentUsersContext = createContext<UserDataProps[] | null>(null);
export const UserDataContext = createContext<UserDataProps[] | any>(null);
export const SetUserDataContext = createContext<any | null>(null);
export const PageNumberContext = createContext<number | any>(null);
export const SetPageNumberContext = createContext<any | null>(null);
export const PerPageContext = createContext<number | any>(null);
export const SetPerPageContext = createContext<any | null>(null);
export const IsError = createContext<boolean | any>(null);
export const IsLoading = createContext<boolean | any>(null);
export const OptionsToggle = createContext<boolean | null>(null);
export const SetOptionsToggle = createContext<any | null>(null);
export const UserID = createContext<any | null>(null);
export const SetUserID = createContext<any | null>(null);
export const UserOptionsToggleFunc = createContext<any | null>(null);