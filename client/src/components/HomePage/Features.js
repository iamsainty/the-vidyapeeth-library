import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaChair,
  FaSnowflake,
  FaTint,
  FaFilePdf,
  FaWind,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

function Features() {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    background: #f5f5f5;
    padding: 60px 80px;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 40px 20px;
    }
  `;

  const LeftHalf = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 40vh;
    padding: 20px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
      padding: 10px;
    }
  `;

  const RightHalf = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 60%;
    text-align: left;

    @media (max-width: 768px) {
      padding: 20px;
      width: 100%;
    }
  `;

  const Title = styled.h2`
    font-size: 48px;
    color: #333;
    margin: 0;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 36px;
    }
  `;

  const Subtitle = styled.p`
    font-size: 20px;
    color: #555;
    margin-top: 10px;
    text-align : center;
    display: none; 

    @media (min-width: 769px) {
      display: block; 
    }
  `;

  const FeaturesList = styled.div`
    font-size: 18px;
    color: #555;
    line-height: 1.7;
    margin: 20px 0;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  `;

  const FeatureItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-size: 22.5px;

    svg {
      margin-right: 12px;
      color: #2a9d8f;
    }
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
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
  `;

  const Icon = styled.div`
    position: absolute;
    font-size: 60px;
    opacity: 0.3;
    animation: ${floatAnimation} 5s ease-in-out infinite;
    transition: transform 0.3s ease, opacity 0.3s ease;

    ${(props) => `
      top: ${props.top}%;
      left: ${props.left}%;
      color: ${props.color};
    `}

    &:hover {
      opacity: 1;
      transform: scale(1.2);
    }

    @media (max-width: 768px) {
      font-size: 40px;
    }
  `;

  return (
    <div>
      <Container>
        <IconContainer>
          {/* Floating icons representing the features */}
          <Icon top={10} left={10} color="#e63946">
            <FaChair />
          </Icon>
          <Icon top={20} left={70} color="#457b9d">
            <FaSnowflake />
          </Icon>
          <Icon top={35} left={40} color="#2a9d8f">
            <FaTint />
          </Icon>
          <Icon top={70} left={20} color="#e9c46a">
            <FaFilePdf />
          </Icon>
          <Icon top={50} left={80} color="#ff6b6b">
            <FaWind />
          </Icon>
        </IconContainer>

        <LeftHalf>
          <Title>Features</Title>
          <Subtitle>
            Our innovative features are designed to enhance your experience,
            providing comfort, convenience, and a supportive environment.
          </Subtitle>{" "}
          {/* New sentence added here */}
        </LeftHalf>
        <RightHalf>
          <FeaturesList>
            <FeatureItem>
              <FiCheckCircle />
              Comfortable Seating
            </FeatureItem>
            <FeatureItem>
              <FiCheckCircle />
              Climate Control
            </FeatureItem>
            <FeatureItem>
              <FiCheckCircle />
              Clean Drinking Water
            </FeatureItem>
            <FeatureItem>
              <FiCheckCircle />
              Access to Study Materials
            </FeatureItem>
            <FeatureItem>
              <FiCheckCircle />
              Well-Ventilated Rooms
            </FeatureItem>
          </FeaturesList>
        </RightHalf>
      </Container>
    </div>
  );
}

export default Features;
