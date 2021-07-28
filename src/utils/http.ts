import qs from "qs";
import * as auth from 'auth-provider'
import { useAuth } from "../context/auth-context";
const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  token?: string,
  data?: object,
}

//封装一个统一的http请求函数。
export const http = async (endpoint: string, {data, token, headers, ...customConfig}: Config = {}) => {
  const config= {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...customConfig
  }
  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window.fetch(`${apiUrl}/${endpoint}`, config).then(
    async (response) => {
      if (response.status === 401) {
        //用户token已经失效
        await auth.logout();
        window.location.reload();
        return Promise.reject({message: "请重新登录"})
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      }
      return Promise.reject(data);
    }
  )
}

//上边的http是普遍性的封装，如果想要每次请求携带token 我们还是需要每次都手动添加token
export const useHttp = () => {
  const {user} = useAuth();
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, {...config, token: user?.token})

}