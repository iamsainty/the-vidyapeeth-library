import React from "react";
import styled from "styled-components";

// Styled components
const FooterContainer = styled.div`
  background-color: #1a1a1a;
  color: white;
  padding: 20px 0; /* Adjust the padding around the footer */
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 20px;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Text = styled.span`
  color: white;
  font-weight: 600;
  font-size: 40px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Highlight = styled.h1`
  color: white;
  font-size: 60px;
  font-weight: 800;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const ContactInfo = styled.div`
  font-size: 15px;

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

const ContactHead = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ContactLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Credits = styled.p`
  margin-top: 30px;
  text-align: center;
  font-size: 1rem;
  padding: 10px 20px;
  border-top: 1px solid #333;

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const MapContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 400px; /* Limit the map's size */

  iframe {
    border: 0;
    width: 100%;
    height: 200px; /* Fixed height */
  }

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Title>
          <Text>The</Text>
          <Highlight>Vidyapeeth</Highlight>
          <Text>Library</Text>
        </Title>
        <ContactInfo>
          <ContactHead>Contact:</ContactHead>
          <p>
            Uddeshya Singh Raghuvanshi
            <br />
            <ContactLink href="tel:9369653234">9369653234</ContactLink>
          </p>
          <p>
            Ganesh Avtar Singh
            <br />
            <ContactLink href="tel:6387843153">6387843153</ContactLink>
          </p>
        </ContactInfo>
        <MapContainer>
          <iframe
            title="Vidyapeeth Library Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1866.8216395257564!2d83.10983025711874!3d25.822637823293388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991c7001b8cf21b%3A0x9feb6694ccd6b8ed!2sVidyapeeth%20Library!5e0!3m2!1sen!2sin!4v1727603853765!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapContainer>
      </Container>
      <Credits>
        <a
          href="https://hey-sainty.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed and Developed with &hearts; by Priyanshu Chaurasiya
        </a>
      </Credits>
    </FooterContainer>
  );
}

export default Footer;
