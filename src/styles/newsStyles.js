import styled from "styled-components";
import { tablet } from "./mediaQueries";

export const Wrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  ${tablet} {
    width: 96%;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.titleText};
  font-size: 1.5em;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 26px;
`;

export const SubWrapper = styled.div`
  color: ${props => props.theme.titleText};
  display: flex;
  align-items: center;
`;

export const Text = styled.h3`
  color: ${({ theme }) => theme.titleText};
  font-size: 1em;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;
