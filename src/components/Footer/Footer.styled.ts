import styled from "styled-components";

interface Props {
  background: string | undefined;
}

const FooterStyled = styled.footer`
  flex-shrink: 0;
  height:150px;
  color:black;
  background-image: ${(props: Props) => `url(${props.background})`};
  background-color: #84A98C;
  background-size: cover;
  background-position: center;
  background-repeat: no - repeat;
`;

export { FooterStyled };
