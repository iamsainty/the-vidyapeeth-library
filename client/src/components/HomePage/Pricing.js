import React from "react";
import styled, { keyframes } from "styled-components";
import { FaDollarSign } from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";

function Pricing() {
  const PricingContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: #f5f5f5;
    padding: 40px 60px;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 30px 15px;
    }
  `;

  const LeftHalf = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction : column;
    width: 40%;
    height: 50vh;
    padding: 20px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
      padding: 15px;
    }
  `;

  const RightHalf = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
    text-align: left;

    @media (max-width: 768px) {
      padding: 15px;
      width: 100%;
    }
  `;

  const Title = styled.h2`
    font-size: 42px;
    color: #333;
    margin: 0;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 30px;
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

  const PricingList = styled.div`
    font-size: 20px;
    color: #555;
    line-height: 1.6;
    margin: 15px 0;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  `;

  const PricingItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-size: 22.5px;

    svg {
      font-size: 25px;
      margin-right: 12px;
      color: #2a9d8f;
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }
  `;

  const PriceText = styled.span`
    margin-left: auto;
    font-weight: bold;
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
    font-size: 50px;
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
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      font-size: 40px;
    }
  `;

  return (
    <div>
      <PricingContainer>
        <IconContainer>
          <Icon top={10} left={10} color="#e63946">
            <RiMoneyRupeeCircleLine />
          </Icon>
          <Icon top={30} left={60} color="#457b9d">
            <FaDollarSign />
          </Icon>
          <Icon top={50} left={40} color="#f4a261">
            <FaRegMoneyBillAlt />
          </Icon>
        </IconContainer>

        <LeftHalf>
            <Title>Pricing</Title>
            <Subtitle>Affordable plans tailored for your needs.</Subtitle>
            <Subtitle>Choose the perfect package that suits you best!</Subtitle>
        </LeftHalf>
        <RightHalf>
          <PricingList>
            <PricingItem>
              <HiOutlineCurrencyRupee />
              Morning Shift: <PriceText>Rs. 400/-</PriceText>
            </PricingItem>
            <PricingItem>
              <HiOutlineCurrencyRupee />
              Evening Shift: <PriceText>Rs. 400/-</PriceText>
            </PricingItem>
            <PricingItem>
              <HiOutlineCurrencyRupee />
              Both Shifts: <PriceText>Rs. 600/-</PriceText>
            </PricingItem>
          </PricingList>
        </RightHalf>
      </PricingContainer>
    </div>
  );
}

export default Pricing;
