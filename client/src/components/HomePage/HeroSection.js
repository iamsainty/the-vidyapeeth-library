import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaBook,
  FaBookmark,
  FaGlasses,
  FaUniversity,
  FaScroll,
  FaFeatherAlt,
  FaWhatsapp,  // Import WhatsApp icon
  FaMapMarkerAlt // Import Location icon
} from "react-icons/fa";

const quotes = [
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "I have always imagined that Paradise will be a kind of library.",
    author: "Jorge Luis Borges",
  },
  { quote: "Books are a uniquely portable magic.", author: "Stephen King" },
  {
    quote:
      "The only thing that you absolutely have to know is the location of the library.",
    author: "Albert Einstein",
  },
  {
    quote: "There is no friend as loyal as a book.",
    author: "Ernest Hemingway",
  },
  {
    quote: "Libraries store the energy that fuels the imagination.",
    author: "Sidney Sheldon",
  },
  {
    quote: "Books are the quietest and most constant of friends.",
    author: "Charles W. Eliot",
  },
  {
    quote:
      "The man who does not read has no advantage over the man who cannot read.",
    author: "Mark Twain",
  },
];

// Keyframes for fade animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// Styled components
const Container = styled.div`
  position: relative;
  background: #f5f5f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 20px;
`;

const Text = styled.span`
  color: #333;
  font-weight: 600;
  font-size: 55px;
  margin: 0 10px;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Highlight = styled.h1`
  color: #333;
  font-size: 90px;
  font-weight: 800;
  margin: 0 10px;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const Description = styled.p`
  color: #555;
  font-size: 20px;
  margin: 20px 0;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  font-size: 22px;
  margin-top: 30px;
  height: 20vh;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const QuoteText = styled.p`
  opacity: ${(props) => (props.fade ? 1 : 0)};
  animation: ${(props) => (props.fade ? fadeIn : fadeOut)} 0.75s ease;
  transition: opacity 0.75s ease;
  margin: 5px 0;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction : column;
  }
`;

const Button = styled.a`
  background-color: #457b9d;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 5px 15px;

  svg {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    justify-content : center;
    width: 80vw;
  }
`;

function HeroSection() {
  const [currentQuote, setCurrentQuote] = useState({ quote: "", author: "" });
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const changeQuote = () => {
      setFade(false);

      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
        setFade(true);
      }, 350);
    };

    changeQuote();
    const intervalId = setInterval(changeQuote, 3500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <IconContainer>
        <Icon top={10} left={10} color="#e63946">
          <FaBook />
        </Icon>
        <Icon top={20} left={80} color="#457b9d">
          <FaBookmark />
        </Icon>
        <Icon top={50} left={20} color="#2a9d8f">
          <FaGlasses />
        </Icon>
        <Icon top={60} left={70} color="#f4a261">
          <FaUniversity />
        </Icon>
        <Icon top={65} left={30} color="#e9c46a">
          <FaScroll />
        </Icon>
        <Icon top={40} left={50} color="#ff6b6b">
          <FaFeatherAlt />
        </Icon>
      </IconContainer>

      <Title>
        <Text>The</Text> <Highlight>Vidyapeeth</Highlight> <Text>Library</Text>
      </Title>
      <Description>
        Explore a world of knowledge and inspiration through our extensive
        collection of books.
      </Description>
      <QuoteContainer>
        <QuoteText fade={fade}>{currentQuote.quote}</QuoteText>
        <QuoteText fade={fade}>- {currentQuote.author}</QuoteText>
      </QuoteContainer>
      
      <ButtonContainer>
        <Button 
          href={`https://wa.me/919369653234?text=Hello, I reached you through your website and want to know more about the Vidyapeeth library.`} 
          target="_blank"
        >
          <FaWhatsapp /> Know More
        </Button>
        <Button 
          href="https://maps.app.goo.gl/t319gb4zV85eav5c9" 
          target="_blank"
        >
          <FaMapMarkerAlt /> Get Location
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default HeroSection;
