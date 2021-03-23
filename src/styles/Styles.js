import styled from 'styled-components';
import img from '../components/pages/Landing/images/dog_bed.jpg';

/******************************************************************************
 *                      Navigation Styles
 ******************************************************************************/

export const Button = styled.button`
  background-color: white;
  color: #1ea7fd;
  border: none;
  border-radius: 10px;
  padding: 10px;
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  width: 170px;

  :hover {
    background-color: #1ea7fd;
    color: white;
  }
`;

/******************************************************************************
 *                      Landing Page Styles
 ******************************************************************************/

// --------------------- Main --------------------- //

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-top: 200px;
  margin-bottom: 50px;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 4.25rem;
  display: flex;
  justify-content: center;
  // Fancy font
  font-family: 'Poppins', sans-serif;
  @media screen and (max-width: 450px) {
    font-size: 2.75rem;
    margin-top: 15px;
    margin-bottom: 0px;
  }
`;

export const SecondTitle = styled.div`
  font-size: 2.5rem;
  font-family: 'Poppins', sans-serif;
  color: #e8833a;
  @media screen and (max-width: 450px) {
    font-size: 1.25rem;
    margin: 5px;
    margin-bottom: 0px;
    text-align: center;
  }
`;

export const Section = styled.div`
  border-radius: 10px;
  border: none;
  width: 85%;
  margin-top: 15px;
  height: 100%;
  margin-bottom: 15px;
  @media screen and (max-width: 450px) {
    width: 90%;
    margin-top: -10px;
    margin-bottom: -10px;
    height: 550px;
  }
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const MediumPara = styled.div`
  font-size: 1.25rem;
  margin-top: 20px;
  margin-bottom: 30px;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export const Row = styled.div`
  width: 33%;
  padding: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    border-radius: 10px;
    padding: 0;
    margin: 30px;
    margin-bottom: 2.5px;
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
  }
`;

export const HiddenRow = styled.div`
  width: 33%;
  padding: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const OrangeIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #f3c19d;
  font-size: 4rem;
  margin: 40px;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;

export const GrayIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: gray;
  font-size: 4rem;
  margin: 40px;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;

// --------------------- Section One --------------------- //

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 50%;
  background-color: gray;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 50px;
  width: 100%;
  height: 100%;
`;

export const IntroSecondTitle = styled.div`
  font-size: 2.5rem;
  font-family: 'Poppins', sans-serif;
  @media screen and (max-width: 450px) {
    font-size: 1.25rem;
    margin: 5px;
    margin-bottom: 0px;
    text-align: center;
  }
`;

export const IntroMediumPara = styled.div`
  font-size: 1.25rem;
  margin: 40px 60px 40px 60px;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export const SectionOne = styled.div`
  background-color: lightgray;
  border-radius: 40px;
  opacity: 95%;
  width: 50%;
  height: 100%;
  padding: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    margin: 10px;
    padding: 10px;
  }
`;

export const OrangeExpress = styled.span`
  font-family: 'Comfortaa', sans-serif;
  color: #e8833a;
  text-shadow: 2px 2px rgb(95, 95, 95);
  margin-bottom: 60px;
  @media screen and (max-width: 450px) {
    margin-bottom: 0px;
  }
`;

// --------------------- Section Two --------------------- //

export const SectionTwo = styled.div`
  background-color: lightgray;
  width: 50%;
  height: 500px;
  position: relative;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

// --------------------- Section Three --------------------- //

export const SectionThreeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-top: 250px;
  /* padding: 20px; */
  width: 100%;
  height: 100%;
`;

export const SectionThree = styled.div`
  width: 40%;
  height: 520px;
  margin-top: 20px;
  text-align: center;

  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    margin: 0px;
    padding: 0px;
    font-size: 1rem;
  }
`;

export const SectionThreeImg = styled.div`
  width: 40%;
  height: 100%;
  padding: 20px 20px 0px 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const SectionThreeDiagramIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Caption = styled.div`
  width: 60%;
  margin: 15px;
  margin-left: 20%;
  margin-right: 0 auto;
  color: gray;
  font-weight: 500;
  text-align: center;
  font-style: italic;
`;

export const SpacingLeft = styled.div`
  margin: 25px;
  margin-bottom: 10px;
  color: #e8833a;
  font-weight: 900;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 450px) {
    font-size: 1.25rem;
    margin-top: 30px;
  }
`;

export const SpacingRight = styled.div`
  margin: 25px;
  color: #e8833a;
  font-weight: 900;
  font-size: 2rem;
  display: flex;
  flex-direction: row-reverse;
  @media screen and (max-width: 450px) {
    font-size: 1.25rem;
    margin-bottom: 30px;
  }
`;

export const GroomerImg = styled.img`
  border-radius: 10px;
  height: auto;
  margin: auto;
  width: 75%;
`;

// --------------------- Section Four --------------------- //

export const SectionFourContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-top: 50px;
  width: 100%;
  height: 100%;
`;

export const SectionFour = styled.div`
  width: 50%;
  height: 520px;
  padding: 20px;
  margin-top: 10px;
  text-align: center;

  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    margin: 0px;
    padding: 0px;
    font-size: 1rem;
  }
`;

export const SectionFourImg = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px 20px 0px 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const SectionFourDiagramIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const BottomSection = styled.div`
  border-radius: 10px;
  border: none;
  width: 85%;
  margin-top: 15px;
  height: 100%;
  @media screen and (max-width: 450px) {
    width: 90%;
    margin-top: -10px;
    margin-bottom: -10px;
    height: 550px;
  }
`;

export const GroomerText = styled.div`
  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
    margin-top: -10px;
    margin-bottom: -20px;
  }
`;

export const Poodle = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

// --------------------- Footer --------------------- //

export const Footer = styled.footer`
  border-top: 10px solid #f3c19d;
  background-color: #e8833a;
  height: 265px;
  display: flex;
  justify-content: space-around;
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    margin-top: 15px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
  }
`;

export const FooterSect = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 1.1rem;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    margin-top: 20px;
    width: 120px;
    padding-top: 50px;
  }
`;

export const FooterTitles = styled.span`
  margin-top: 30px;
  font-size: 1.55rem;
  font-weight: 700;
  color: white;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    margin-top: 15px;
  }
`;

export const Spacing = styled.div`
  margin-bottom: 5px;
  @media screen and (max-width: 450px) {
    margin-bottom: 2.5px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 450px) {
    position: absolute;
    top: 5px;
    margin-bottom: 10px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: white;
  font-size: 2rem;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;

export const Logo = styled.div`
  color: white;
  font-size: 4em;
  padding: 0.25em;
  border-radius: 10px;
  font-family: 'Leckerli One', cursive;
  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
  }
`;

export const Copyright = styled.div`
  font-size: 0.5 rem;
  display: flex;
  flex-direction: column-reverse row-reverse;
  color: black;
  position: absolute;
  top: 200px;
  @media screen and (max-width: 450px) {
    padding-top: 20px;
    font-size: 0.75rem;
  }
`;
