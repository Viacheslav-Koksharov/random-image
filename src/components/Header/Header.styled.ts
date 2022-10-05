import styled from "styled-components";

interface Props {
  background: string | undefined;
}

const HeaderStyled = styled.header`
  height:150px;
  color: white;
  background-image: ${(props: Props) => `url(${props.background})`};
  background-color: #84A98C;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export { HeaderStyled };
