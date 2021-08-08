import { useState } from "react";
import { RegisterScreen } from "./register";
import { LoginScreen } from "./login";
import { Button, Card } from "antd";
import styled from "@emotion/styled";
import logo from "assets/logo.svg";
import left from "assets/left.svg";
import right from "assets/right.svg";
export const UnauthenticatedApp = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <Container>
      <Header />
      <Background />

      <ShadowCard>
        <Title>{isRegistered ? "请注册" : "请登录"}</Title>
        {isRegistered ? <RegisterScreen /> : <LoginScreen />}
        <LongButton
          onClick={() => {
            setIsRegistered(!isRegistered);
          }}
        >
          切换到{isRegistered ? "登录" : "注册"}
        </LongButton>
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
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-repeat: no-repeat;
`;

const Header = styled.div`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
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
//button在login界面和register界面都有被使用，所以这里暴露出去
export const LongButton = styled(Button)`
  width: 100%;
`;
