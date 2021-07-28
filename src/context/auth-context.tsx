import React, { ReactNode, useContext, useState } from "react";
import * as auth from "../auth-provider";
import { User } from "../screens/project-list/search-panels";
import { getToken } from "../auth-provider";
import { http } from "../utils/http";
import { useMount } from "../utils";
interface AuthForm {
  username: string;
  password: string;
}

//找token 拿着token找user(发请求) 然后setUser
const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken()
  if (token) {
    const data = await http('me', {token});
    user = data.user;
  }
  return user;
}

const AuthContext = React.createContext<
  {
    user: User | null,
    login: (form: AuthForm) => Promise<void>,
    register: (form: AuthForm) => Promise<void>,
    logout: () => Promise<void>
  } | undefined
  >(undefined);

//for the usage in devtool

AuthContext.displayName = "AuthContext";

//main logic part--
export const AuthProvider = ({children} : {children: ReactNode}) => {
  //careful with the generic of setState
  const [user, setUser] = useState< User | null >(null);
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));


  //检查初始化user
  useMount(() => {
    bootstrapUser().then(setUser);
  })
  return <AuthContext.Provider children={children} value={{user, login, register, logout}}/>
};


//custom hook 用于判断是否现在有可用的context 说明context是在AuthProvider范围内的。
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth can only be used in the AuthProvider");
  }
  return context;
}
