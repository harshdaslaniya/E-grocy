import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box >
      <Container>
        <Row >
          <Column style={{ marginLeft: "10px"}}>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Delevoper</FooterLink>
          </Column>
          <Column style={{ marginLeft: "10px" }}>
            <Heading>Services</Heading>
            <FooterLink href="#">Delivery </FooterLink>
            <FooterLink href="#">Buying/Selling</FooterLink>
          </Column>
          <Column style={{ marginLeft: "10px" }}>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Bhavnagar</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
          </Column>
          <Column style={{ marginLeft: "10px" }}>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;