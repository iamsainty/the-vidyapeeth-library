import React from "react";
import styled, { keyframes } from "styled-components";
import { FaBook, FaUsers, FaLightbulb, FaHandsHelping } from "react-icons/fa";

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #f5f5f5;
  padding: 40px 75px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

const LeftHalf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 40%;
  height: 40vh;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

const RightHalf = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;

  @media (max-width: 768px) {
    padding: 20px;
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 50px;
  color: #333;
  margin: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 36px;
    font-weight: bold;
  }
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: #555;
  margin-top: 10px;
  text-align: center;
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`;

const Description = styled.p`
  font-size: 20px;
  color: #555;
  line-height: 1.6;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
`;

const Icon = styled.div`
  position: absolute;
  font-size: 60px;
  opacity: 0.4;
  animation: ${floatAnimation} 3s ease-in-out infinite;
  transition: transform 0.3s ease, opacity 0.3s ease;

  ${(props) => `
    top: ${props.top}%;
    left: ${props.left}%;
    color: ${props.color};
  `}

  &:hover {
    opacity: 1;
    transform: scale(1.5);
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

function About() {
  return (
    <Container>
      <IconContainer>
        <Icon top={10} left={10} color="#e63946">
          <FaBook />
        </Icon>
        <Icon top={20} left={70} color="#457b9d">
          <FaUsers />
        </Icon>
        <Icon top={40} left={30} color="#2a9d8f">
          <FaLightbulb />
        </Icon>
        <Icon top={60} left={60} color="#f4a261">
          <FaHandsHelping />
        </Icon>
      </IconContainer>

      <LeftHalf>
        <Title>About</Title>
        <Subtitle>
          Bridging the gap to a world of books.
          <br />
          Making reading accessible for all.
        </Subtitle>
      </LeftHalf>
      <RightHalf>
        <Description>
          Book reading is a wonderful habit that enriches the mind and spirit.
          However, accessing books in rural areas can be challenging. This
          library was established to bridge that gap, making books readily
          available for the people in the villages, fostering a love for
          reading, and encouraging lifelong learning.
        </Description>
      </RightHalf>
    </Container>
  );
}

export default About;
