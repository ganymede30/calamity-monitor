// React
import React from "react";

// Components
import Loader from "calcite-react/Loader";
import background from "../styles/images/worldMap.svg";

// Styled & Motion Components
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-blend-mode: screen;
`;

// background: rgba(255, 255, 255, 0.1) url(${background}) no-repeat center/cover;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  color: ${(props) => props.theme.titleText}
`;

// const FadingContainer = () => (
//   <motion.div
//     initial={{ opacity: 1, zIndex: 1000 }}
//     animate={{
//       opacity: 0,
//       transitionEnd: {
//         display: "none"
//       }
//     }}
//     transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
//   >
//     {/* <Container></Container> */}
//   </motion.div>
// );

const LoadScreen = props => {
  if (!props.isLoading) {
    return (
      <Container>
        <Wrapper>
          <Loader text="Map Loading" />
        </Wrapper>
      </Container>
    );
  }

  // return <FadingContainer />;
};

export default LoadScreen;
