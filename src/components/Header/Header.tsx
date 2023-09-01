import { styled } from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  height: 80px;
  width: 100%;
  background-color: skyblue;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Physio-Krankheitsbilder</h1>
    </StyledHeader>
  );
}
