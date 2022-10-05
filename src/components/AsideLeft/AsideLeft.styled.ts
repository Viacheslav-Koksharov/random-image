import styled from "styled-components";

interface Props {
  background: string | undefined;
}

const AsideLeft = styled.aside`
  width: 200px;
  color: white;
  background-color: #52796f;
  background-image: ${(props: Props) => `url(${props.background})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export { AsideLeft };
