import React from "react";
import Loader from "calcite-react/Loader";
// import background from "../styles/images/worldMap.svg";

// Styled & Motion Components
import styled from "styled-components";
// import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  color: ${props => props.theme.titleText};
`;

const LoadScreen = props => {
  if (!props.isLoading) {
    return (
      <Container>
        <Wrapper>
          <Loader text={<h3>Map Loading</h3>} />
        </Wrapper>
      </Container>
    );
  }
};

export default LoadScreen;
