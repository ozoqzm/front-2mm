// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// // 물방울 이미지 수정 필요 (누끼)

// const Box = styled.div`
//   position: relative;
//   margin: auto;
//   margin-bottom: -15px;
//   width: 346px;
//   height: 175px;
//   background: pink;
//   border-radius: 17.76px;
// `;
// const SettingBtn = styled.button`
//   position: relative;
//   top: -150px;
//   left: 300px;
//   width: 30px;
//   height: 30px;
//   background: url("${process.env.PUBLIC_URL}/images/settingbtn.svg");
//   background-size: cover;
//   border: none;
// `;

// // 해당 그룹의 이미지 불러오기.. get할때 그룹으로 get. 전체 말고
// const AlbumItem = ({ postID }) => {
//   const navigate = useNavigate();

//   const gotoBack = () => {
//     navigate(`/Album`); // user_id, post_id read에 전달. 원래는 뒤에 ${postID}
//   };

//   return (
//     <>
//       <Box onClick={goGroupHome}>
//         {" "}
//         <img src={`${process.env.PUBLIC_URL}/images/familypic.svg`} />
//         {/* <img
//         src={post && post.image}
//         style={{ display: "block", margin: "auto", width: "300px" }}
//       /> -> 이건 연동할 때 이미지 */}
//       </Box>
//       <SettingBtn></SettingBtn>
//       {/* 버튼에 수정삭제 기능 추가해야하나... */}
//     </>
//   );
// };

// export default AlbumItem;
