import React from 'react';
import styled from 'styled-components';
import GithubIcon from '/public/assets/icons/footer/github.svg';
import LinkedinIcon from '/public/assets/icons/footer/linkedin.svg';

const FooterContainer = styled.div`
  width: 100%;
  height: 115px;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <a
        className="social-link"
        href="https://github.com/zachdorcinville21"
        target="_blank"
        rel="noreferrer"
      >
        <IconWrapper>
          <GithubIcon />
        </IconWrapper>
      </a>
      <a
        className="social-link"
        href="https://linkedin.com/in/zachary-d"
        target="_blank"
        rel="noreferrer"
      >
        <IconWrapper>
          <LinkedinIcon />
        </IconWrapper>
      </a>
    </FooterContainer>
  );
};

export default Footer;
