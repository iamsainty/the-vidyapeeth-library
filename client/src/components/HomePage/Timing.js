import React from "react";
import styled, { keyframes } from "styled-components";
import { FiClock } from "react-icons/fi";
import { FaRegClock, FaSun, FaMoon } from "react-icons/fa"; // Adding relevant floating icons

function Timing() {
  // Styled components for the timing section
  const TimingContainer = styled.div`
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    height: 30vh;
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
    align-items: center;
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

  const TimingList = styled.div`
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

  const TimingItem = styled.div`
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
      <TimingContainer>
        <IconContainer>
          {/* Floating icons related to time */}
          <Icon top={10} left={10} color="#e63946">
            <FaRegClock />
          </Icon>
          <Icon top={20} left={70} color="#457b9d">
            <FaSun />
          </Icon>
          <Icon top={60} left={40} color="#f4a261">
            <FaMoon />
          </Icon>
        </IconContainer>

        <LeftHalf>
          <Title>Timings</Title>
          <Subtitle>
            Our facility operates with flexible timings, ensuring you can make
            the most of your day
          </Subtitle>
        </LeftHalf>
        <RightHalf>
          <TimingList>
            <TimingItem>
              <FiClock />
              1st Shift: 7:00 AM - 1:00 PM
            </TimingItem>
            <TimingItem>
              <FiClock />
              2nd Shift: 1:00 PM - 7:00 PM
            </TimingItem>
          </TimingList>
        </RightHalf>
      </TimingContainer>
    </div>
  );
}

export default Timing;
