import { createContext } from "react";

type LogInContextType = {
  signedInUser: string | null;
  setSignedInUser: React.Dispatch<React.SetStateAction<string | null>>;
};

export const LogInContext = createContext<LogInContextType | null>(null);

type VendorLogInContextType = {
  signedInVendor: string | null;
  setSignedInVendor: React.Dispatch<React.SetStateAction<string | null>>;
    signedInVendorType: string | null;
  setSignedInVendorType: React.Dispatch<React.SetStateAction<string | null>>;
};

export const VendorLogInContext = createContext<VendorLogInContextType | null>(
  null
);
