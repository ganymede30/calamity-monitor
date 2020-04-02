import styled from "styled-components";
import { tablet } from "./mediaQueries";

export const Title = styled.h1`
  color: ${props => props.theme.titleText};
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 3px;
`;
