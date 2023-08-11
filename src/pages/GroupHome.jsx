import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GroupItem from "./GroupItem";

const Container = styled.div`
  position: relative;
  margin: 30px 0;
  width: 375px;
  height: 740px;
  background: #f8f8f8;
  border: 1px solid gray;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const BluePoint = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const Mark = styled.div`
  position: relative;
  margin-top: -190px;
  left: -150px;
`;

const GroupTitle = styled.div`
  position: relative;
  margin-top: -55px;
  display: inline-block;
  font-family: SUIT;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 1;
`;

const BoxZone = styled.div`
  position: relative;
  top: 5px;
  height: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 340px;
  height: 155px;
  background: url("${process.env.PUBLIC_URL}/images/whiteblank.svg");
  background-size: cover;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.12));
`;

const CircleImg = styled.div`
  position: relative;
  top: 7px;
`;

const StickyBox = styled.div`
  position: sticky;
  top: 0;
`;
const BtnTitle = styled.div`
  position: relative;
  margin-top: -95px;
  margin-left: 110px;
  margin-bottom: 5px;
  width: 200px;
  color: #3455e0;
  font-family: SUIT;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const BtnExplain = styled.div`
  position: relative;
  width: 244px;
  margin-left: 110px;
  color: #3455e0;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const GroupHome = () => {
  const navigate = useNavigate();

  // 이동 링크 뒤에.. userId같은 거 넘겨줘야하나
  // 게시판 이동
  const gotoBoard = () => {
    navigate("/Post1");
  };
  const gotoAlbum = () => {
    navigate("/Album");
  };
  const gotoScreen = () => {
    navigate("/Screenshare");
  };
  // 일정으로 이동
  const gotoPlan = () => {
    //navigate("/Album");
  };
  return (
    <Container>
      <StickyBox>
        <BluePoint>
          <img
            style={{ width: "375px" }}
            src={`${process.env.PUBLIC_URL}/images/bluepoint.svg`}
          />
          <Mark>
            <img src={`${process.env.PUBLIC_URL}/images/heartmark.svg`} />
          </Mark>
          <GroupTitle>화목한 우리 가족</GroupTitle>
        </BluePoint>
      </StickyBox>
      <BoxZone>
        <Box>
          <CircleImg>
            <img src={`${process.env.PUBLIC_URL}/images/boardmark.svg`} />
          </CircleImg>
          <BtnTitle onClick={gotoBoard}>게시판</BtnTitle>
          <BtnExplain>
            가족들과 사진을
            <br />
            공유해보세요.
          </BtnExplain>
        </Box>
        <Box onClick={gotoAlbum}>
          <CircleImg>
            <img src={`${process.env.PUBLIC_URL}/images/albumimg.svg`} />
          </CircleImg>
          <BtnTitle>앨범</BtnTitle>
          <BtnExplain>
            여기서 사진을 한 눈에
            <br />
            확인할 수 있어요.
          </BtnExplain>
        </Box>
        <Box onClick={gotoScreen}>
          <CircleImg>
            <img src={`${process.env.PUBLIC_URL}/images/screenmark.svg`} />
          </CircleImg>
          <BtnTitle>화상공유</BtnTitle>
          <BtnExplain>
            핸드폰 사용이 어렵다면
            <br />
            화상공유를 해보세요!
          </BtnExplain>
        </Box>
        <Box onClick={gotoPlan}>
          <CircleImg>
            <img src={`${process.env.PUBLIC_URL}/images/planmark.svg`} />
          </CircleImg>
          <BtnTitle>일정</BtnTitle>
          <BtnExplain>
            우리 가족 중요 일정을
            <br />
            모아볼 수 있어요.
          </BtnExplain>
        </Box>
      </BoxZone>
    </Container>
  );
};

export default GroupHome;
