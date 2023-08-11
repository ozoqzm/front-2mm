import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 30px auto;
  max-width: 375px;
  height: 740px;
  background: white;
  border: 1px solid gray;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Back = styled.div`
  position: relative;
  margin-top: 17px;
  margin-left: 15px;
`;

const Title = styled.div`
  position: relative;
  margin-top: 30px;
  margin-left: 30px;
`;

const SubTitle = styled.div`
  position: relative;
  margin-top: 10px;
  margin-left: 30px;
`;

const NextBtn = styled.div`
  position: relative;
  margin-top: 40px;
  left: 22px;
`;

const Screenshare = () => {
  const navigate = useNavigate();

  const gotoProgress = () => {
    navigate("/ScreenProgress");
  };
  const gotoBack = () => {
    navigate("/GroupHome");
  };

  return (
    <Container>
      <Back onClick={gotoBack}>
        <img src={`${process.env.PUBLIC_URL}/images/backbtn.svg`} />
      </Back>
      <Title>
        <img src={`${process.env.PUBLIC_URL}/images/scrtitle.svg`} />
      </Title>
      <SubTitle>
        <img src={`${process.env.PUBLIC_URL}/images/scrsubtitle.svg`} />
      </SubTitle>
      <NextBtn onClick={gotoProgress}>
        <img src={`${process.env.PUBLIC_URL}/images/sharestartbtn.svg`} />
      </NextBtn>
    </Container>
  );
};

export default Screenshare;
