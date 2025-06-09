import { createContext } from "react";

type LogInContextType = {
  signedInUser: string | null;
  setSignedInUser: React.Dispatch<React.SetStateAction<string | null>>;
};

export const LogInContext = createContext<LogInContextType | null>(null);
