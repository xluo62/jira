import { useState } from "react";
import { RegisterScreen } from "./register";
import { LoginScreen } from "./login";
import { Card } from "antd";
import styled from "@emotion/styled";
import logo from "assets/logo.svg";
import left from "assets/logo.svg";
import right from "assets/logo.svg";
export const UnauthenticatedApp = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <Container>
      <Header />
      <ShadowCard>
        {isRegistered ? <RegisterScreen /> : <LoginScreen />}
        <button
          onClick={() => {
            setIsRegistered(!isRegistered);
          }}
        >
          切换到{isRegistered ? "登录" : "注册"}
        </button>
      </ShadowCard>
    </Container>
  );
};
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-image: url(${left}), url(${right});
`;

const Header = styled.div`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
