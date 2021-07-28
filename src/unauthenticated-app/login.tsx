import { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
const apiURL = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {
  // const login = (param: { username: string; password: string }): void => {
  //   fetch(`${apiURL}/login`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(param),
  //   }).then(async (response) => {
  //     if (response.ok) {
  //     }
  //   });
  // };
  const {login, user} = useAuth();



  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value;
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
    login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      {
        user ? <div>(登陆成功：用户名: {user?.name})</div> : null
      }

      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id="password" />
      </div>

      <button type="submit">登录</button>
    </form>
  );
};
