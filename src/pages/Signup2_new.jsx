import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  margin: 30px 0;
  max-width: 375px;
  height: 740px;
  background: white;
  border: 1px solid gray;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Back = styled.button`
  position: relative;
  margin-top: 17px;
  margin-left: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const SubTitle = styled.div`
  position: relative;
  top: 25px;
  left: 25px;
`;

const ImageUpload = styled.div`
  position: relative;
  width: 318px;
  height: 242px;
  top: 70px;
  left: 30px;
  flex-shrink: 0;
  border-radius: 16px;
`;

const InputGroupname = styled.input`
  position: relative;
  width: 300px;
  height: 50px;
  left: 22px;
  top: 55px;
  border-radius: 7px;
  border: 1.5px solid #0085ff;
  font-size: 20px;
  padding-left: 15px;

  ::placeholder {
    color: #7c7c7c;
  }
`;

const NextBtn = styled.button`
  position: relative;
  top: 250px;
  left: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Signup2_new = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/signup1_new");
  };

  const handleNextClick = () => {
    navigate("/signup3_new");
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // 선택한 이미지 파일 가져오기
    setSelectedImage(file); // 선택한 이미지 상태 업데이트
  };

  return (
    <Container>
      <Back onClick={handleBackClick}>
        <img src={`${process.env.PUBLIC_URL}/images/backbtn.svg`} alt="Back" />
      </Back>
      <SubTitle>
        <img src={`${process.env.PUBLIC_URL}/images/subtitle_groupimage.svg`} />
      </SubTitle>
      <ImageUpload>
        <label htmlFor="imageUploadInput">
          <img src={`${process.env.PUBLIC_URL}/images/image_upload.svg`} />
        </label>
        <input
          type="file"
          id="imageUploadInput"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        ></input>
      </ImageUpload>
      <NextBtn onClick={handleNextClick}>
        {" "}
        {/* Call handleNextClick */}
        <img src={`${process.env.PUBLIC_URL}/images/nextbtn.svg`} />
      </NextBtn>
    </Container>
  );
};

export default Signup2_new;
