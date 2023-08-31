import { styled } from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  height: 80px;
  width: 100%;
  background-color: skyblue;
  text-align: center;
  justify-content: center;
`;
export default function Heading() {
  return <StyledHeader>Physio</StyledHeader>;
}
