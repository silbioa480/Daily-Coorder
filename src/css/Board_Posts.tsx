import styled from "styled-components";

//프로필
export const Circle = styled.img`
  border-radius: 50%;
  font-size: 1em;
  border: 1px solid lightgray;
  color: gray;
  background: white;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//댓글
export const Com = styled.div`
  font-size: 1em;
  border: 1px solid lightgray;
  color: black;
  background: white;
  width: 200px;
  height: 50px;
  margin-left: 60px;
`;
// 20대 여성 등 teg
export const Square = styled.div`
  font-size: 1em;
  border: 1px solid lightgray;
  border-radius: 10px;
  color: black;
  width: 40px;
  height: 30px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//qr코드
export const QR = styled.img`
  width: 300px;
  height: 300px;
`;
export const CButton = styled.button`
  background-color: ${(props) => props.color};
  color: ${(props) => props.value};
`;
