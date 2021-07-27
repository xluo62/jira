import React from "react";

interface AuthForm {
  username: string;
  password: string;
}

const AuthContext = React.createContext(undefined);

//for the usage in devtool

AuthContext.displayName = "AuthContext";

//main logic part
export const AuthProvider = () => {};
