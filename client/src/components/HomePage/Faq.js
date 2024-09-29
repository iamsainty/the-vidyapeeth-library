import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { GoQuestion } from "react-icons/go";
import { GiOpenBook } from "react-icons/gi";
import { MdWifi } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaRegClock, FaFileInvoiceDollar } from "react-icons/fa";

// FAQ data
const faqs = [
  {
    question: "What are the library hours?",
    answer: "The library is open from 7:00 AM to 7:00 PM on weekdays.",
  },
  {
    question: "Is Wi-Fi available at the library?",
    answer: "Yes, high-speed Wi-Fi is available throughout the library.",
  },
  {
    question: "How do I register for the library?",
    answer:
      "You can register online through our website or visit us in person.",
  },
  {
    question: "Can I borrow books from the library?",
    answer:
      "Yes, registered members can borrow up to 5 books at a time for a period of 2 weeks.",
  },
  {
    question: "Are there any fees for late returns?",
    answer:
      "Yes, there is a late fee of ₹10 per day for each book not returned on time.",
  },
];

// Styled components
const FaqContainer = styled.section`
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
  height: 40vh;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

const RightHalf = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
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

const FaqList = styled.div`
  font-size: 15px;
  color: #555;
  line-height: 1.7;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  width: 75%;

  @media (max-width: 768px) {
    font-size: 18px;
    width: 100%;
  }
`;

const FaqItem = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid #eaeaea;
  transition: background 0.2s;

  &:hover {
    background: #f0f0f0;
    color: #2a9d8f;
  }

  svg {
    margin-right: 12px;
    color: #2a9d8f;
    font-size: 25px;
  }
`;

const Question = styled.h3`
  font-size: 22.5px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 18px;
    width: 100%;
  }
`;

const Answer = styled.div`
  margin-left: 40px;
  font-size: 18px;
  color: #666;
  transition: max-height 0.2s ease-out;
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

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the answer visibility
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FaqContainer>
      <IconContainer>
        <Icon top={5} left={5} color="#e63946">
          <GiOpenBook />
        </Icon>
        <Icon top={25} left={70} color="#457b9d">
          <MdWifi />
        </Icon>
        <Icon top={50} left={20} color="#f4a261">
          <AiOutlineUserAdd />
        </Icon>
        <Icon top={60} left={60} color="#2a9d8f">
          <FaRegClock />
        </Icon>
        <Icon top={20} left={30} color="#6a994e">
          <FaFileInvoiceDollar />
        </Icon>
      </IconContainer>

      <LeftHalf>
        <Title>FAQs</Title>
        <Subtitle>
          Got questions? We have answers! <br /> Explore our FAQs to find the
          information you need.
        </Subtitle>
      </LeftHalf>
      <RightHalf>
        <FaqList>
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              onClick={() => handleToggle(index)}
              aria-expanded={activeIndex === index}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <GoQuestion aria-hidden="true" />
                <Question>{faq.question}</Question>
              </div>
              {activeIndex === index && (
                <Answer role="region" aria-labelledby={`faq-${index}`}>
                  {faq.answer}
                </Answer>
              )}
            </FaqItem>
          ))}
        </FaqList>
      </RightHalf>
    </FaqContainer>
  );
}

export default Faq;
