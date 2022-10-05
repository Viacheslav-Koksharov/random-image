import styled from "styled-components";

interface Props {
  background: string | undefined;
}

const MainStyled = styled.main`
  position: relative;
  height: 268px;
  flex: auto;
  color: white;
  background-image:${(props: Props) => `url(${props.background})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  padding:10px;
  color: white;
  cursor: pointer;
  background-color: ${(props: Props) => (props.background)};
  &:hover{
    scale: 1.05;
  }
`;

export { MainStyled, Button };
