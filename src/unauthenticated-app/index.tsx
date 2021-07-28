import { useState } from "react";
import { RegisterScreen } from "./register";
import { LoginScreen } from "./login";
import { Card } from "antd";

export const UnauthenticatedApp = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  return <div style={{display: 'flex', justifyContent:'center'}}>
    <Card>
      {isRegistered ? <RegisterScreen/> : <LoginScreen/>}
      <button onClick={() => {setIsRegistered(!isRegistered)}}>切换到{isRegistered ? '登录' : '注册'}</button>
    </Card>
  </div>
}