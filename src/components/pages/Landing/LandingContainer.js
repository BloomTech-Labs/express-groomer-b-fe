import React from 'react';
import {
  Container,
  IntroContainer,
  Title,
  SecondTitle,
  Section,
  SectionOne,
  SectionThree,
  SectionFour,
  SectionThreeContainer,
  SectionThreeImg,
  SectionFourContainer,
  SectionFourImg,
  SectionFourDiagramIconContainer,
  SectionThreeDiagramIconContainer,
  BottomSection,
  Row,
  HiddenRow,
  CenterDiv,
  IntroMediumPara,
  IntroSecondTitle,
  MediumPara,
  OrangeExpress,
  Footer,
  LogoContainer,
  SocialContainer,
  Logo,
  Caption,
  FooterTitles,
  FooterSect,
  Copyright,
  GroomerImg,
  GroomerText,
  Spacing,
  Poodle,
  GrayIcons,
  OrangeIcons,
} from '../../../styles/Styles';

const LandingContainer = () => {
  return (
    <div>
      <IntroContainer>
        <Section>
          <CenterDiv>
            <SectionOne>
              <Title>
                <OrangeExpress>Express Groomer</OrangeExpress>
              </Title>
              <IntroSecondTitle>Get Clean, Faster</IntroSecondTitle>
              <IntroMediumPara>
                With Express Groomer you are your own boss. Whether you're a pet
                owner looking for a squeaky clean pet or a Groomer looking to
                add more clients to your business. Your Schedule: Your Rules.
              </IntroMediumPara>
              <IntroMediumPara>
                Let's face it. Our pets are entitled to the very best care we
                can provide for them. Express Groomer gives you and your beloved
                pet the power to select a professional who is right for you.
              </IntroMediumPara>
            </SectionOne>
          </CenterDiv>
        </Section>
      </IntroContainer>

      <Container>
        <Section>
          {/* <SpacingLeft>Spend less time on grooming...</SpacingLeft> */}
          <CenterDiv>
            <Row>
              <SecondTitle>Why Wait?</SecondTitle>
              <MediumPara>
                Appointments at a National Chain Salon can take up to 3 hours.
              </MediumPara>
              <div>
                Most of that time spent waiting in a crate, surrounded by
                unfamiliar pets and strange noises - then being handled by a
                stranger. With Express Groomer the average appointment lasts
                only 90 minutes - most of that time being spent 1 on 1 with a
                Groomer who can become a familiar face.
              </div>
            </Row>

            <HiddenRow>
              <Poodle
                src={require('./images/dog_with_book.jpg')}
                alt="poodle"
              ></Poodle>
            </HiddenRow>

            <HiddenRow>
              <SecondTitle>Sensitive Skin?</SecondTitle>
              <MediumPara>
                Commercial shampoos contain harsh sulfates that strip your pet's
                coat of its delicate oils.
              </MediumPara>
              <div>
                Our Groomers only use shampoos from a pre-approved list of
                products containing natural, moisturizing ingredients that are
                sure to leave your pet with a shiny soft coat. No harsh
                chemicals needed!
              </div>
            </HiddenRow>
          </CenterDiv>
          {/* <SpacingRight>...and more time with your pets</SpacingRight> */}
        </Section>
      </Container>

      <SectionThreeContainer>
        <SectionThree>
          <SecondTitle>Your pet's custom tailored solutions</SecondTitle>
          <GroomerText>
            <SectionThreeDiagramIconContainer>
              <GrayIcons>
                <div className="fa fa-list-ul"></div>
                <Caption>
                  <div>Search for a local groomer</div>
                </Caption>
              </GrayIcons>
              <GrayIcons>
                <div className="fa fa-route"></div>
                <Caption>
                  <div>Arrange a meeting</div>
                </Caption>
              </GrayIcons>
              <GrayIcons>
                <div className="fa fa-magic"></div>
                <Caption>
                  <div>Let the magic happen</div>
                </Caption>
              </GrayIcons>
            </SectionThreeDiagramIconContainer>
            <br></br>
            <MediumPara>
              Stop searching for groomers on random platforms. Express groomer
              does the heavy lifting, so you don't have to! We give you the
              tools to search for the groomer that best meets your dog's needs
              and preferences, so you get the best experience possible.
            </MediumPara>
            <MediumPara>
              Need a groomer that specializes in sensitve skin products? Long
              hair? Anxiety? We have you covered.
            </MediumPara>
          </GroomerText>
        </SectionThree>

        <SectionThreeImg>
          <GroomerImg
            src={require('./images/shibe_ponder_crop.jpg')}
            alt="groomer"
          ></GroomerImg>
        </SectionThreeImg>
      </SectionThreeContainer>

      <SectionFourContainer>
        <BottomSection>
          <CenterDiv>
            <SectionFourImg>
              <GroomerImg
                src={require('./images/brown_dog_gaze.jpg')}
                alt="groomer"
              ></GroomerImg>
            </SectionFourImg>

            <SectionFour>
              <SecondTitle>You and your beloved pet</SecondTitle>
              <MediumPara>
                Whether you're looking to get extra income or start a Freelance
                career, turn your passion for pets into extra income!
              </MediumPara>
              <GroomerText>
                <SectionFourDiagramIconContainer>
                  <GrayIcons>
                    <div className="fa fa-dog"></div>
                  </GrayIcons>
                  <OrangeIcons>
                    <div className="fa fa-long-arrow-alt-right"></div>
                  </OrangeIcons>
                  <GrayIcons>
                    <div className="fa fa-shower"></div>
                  </GrayIcons>
                  <OrangeIcons>
                    <div className="fa fa-long-arrow-alt-right"></div>
                  </OrangeIcons>
                  <GrayIcons>
                    <div className="fa fa-magic"></div>
                  </GrayIcons>
                </SectionFourDiagramIconContainer>
                <br></br>
                <SecondTitle>Local, professional groomers</SecondTitle>
                <MediumPara>
                  Becoming a Groomer with Express Groomer is Easy! Just upload a
                  copy of your Groomer's License and ID and one of our
                  representitives will reach out for a brief chat.
                </MediumPara>
              </GroomerText>
            </SectionFour>
          </CenterDiv>
        </BottomSection>
      </SectionFourContainer>

      <Footer className={'footer'}>
        <LogoContainer>
          <Logo>Express Groomer</Logo>
          <SocialContainer>
            <div className="fa fa-facebook"></div>
            <div className="fa fa-twitter"></div>
            <div className="fa fa-instagram"></div>
            <div className="fa fa-youtube"></div>
            <div className="fa fa-reddit"></div>
          </SocialContainer>
        </LogoContainer>

        <FooterSect>
          <FooterTitles>About</FooterTitles>
          <Spacing>Overview</Spacing>
          <Spacing>Press</Spacing>
          <Spacing>Investors</Spacing>
        </FooterSect>
        <FooterSect>
          <FooterTitles>Connect</FooterTitles>
          <Spacing>FAQ</Spacing>
          <Spacing>Help</Spacing>
          <Spacing>Contact Us</Spacing>
        </FooterSect>
        <FooterSect>
          <FooterTitles>Company</FooterTitles>
          <Spacing>Terms</Spacing>
          <Spacing>Privacy Policy</Spacing>
          <Spacing>Careers</Spacing>
        </FooterSect>
        <Copyright>© Copyright - Express Groomer </Copyright>
      </Footer>
    </div>
  );
};

export default LandingContainer;
