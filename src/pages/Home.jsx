import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GroupItem from "./GroupItem";

const Container = styled.div`
  position: relative;
  width: 375px;
  height: 740px;
  background: #fff;
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
const StickyBox = styled.div`
  position: sticky;
  top: 0;
`;
const BoxZone = styled.div`
  position: relative;
  max-width: 346px;
  height: 600px;
  margin: auto;
  top: -30px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    /* WebKit 브라우저의 스크롤바를 숨김 */
    width: 0;
    background: transparent;
  }
`;
const AddBox = styled.div`
  position: relative;
  margin: auto;
  width: 340px;
  height: 175px;
  margin-bottom: 10px;
  border-radius: 17.76px;
  border: 2px dashed #0057ff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  const navigate = useNavigate();

  const gotoAdd = () => {
    navigate("/G");
  };
  return (
    <Container>
      <StickyBox>
        <BluePoint>
          <img
            width="375px"
            src={`${process.env.PUBLIC_URL}/images/bluepoint.svg`}
          />
          <Mark>
            <img src={`${process.env.PUBLIC_URL}/images/heartmark.svg`} />
          </Mark>
        </BluePoint>
      </StickyBox>
      <BoxZone>
        {/* 사용자의 그룹 전체 리스트들 위에 불러오고.. 여기다간 GroupItem반복문 써서 돌리기
        -> 돌릴 때 props로 그룹 코드 전달 해야함 */}
        <GroupItem></GroupItem>
        <GroupItem></GroupItem>
        <GroupItem></GroupItem>
        <AddBox onClick={gotoAdd}>
          <img
            style={{ margin: "40px" }}
            src={`${process.env.PUBLIC_URL}/images/addbox2.svg`}
          />
        </AddBox>
      </BoxZone>
    </Container>
  );
};

export default Home;
