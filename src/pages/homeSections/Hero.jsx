import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/Slider1.png";
import Slider2 from "../../assets/Slider2.png";
import Slider3 from "../../assets/Slider3.png";
import MobileSlider1 from "../../assets/mobile-Slider1.png";
import MobileSlider2 from "../../assets/mobile-Slider2.png";
import MobileSlider3 from "../../assets/mobile-Slider3.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  const navigate = useNavigate();
  const userData = useSelector(state => state.persistedReducer.auth)


  return (
    <HeroSection>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Your Future, Your Wealth, Our Expertise</h1>
        <p>
          As a global investment firm, we foster diverse perspectives and
          embrace innovation to help our clients navigate the uncertainty of
          capital markets
        </p>
        {userData?.currentUser?.fullname ? (
          <button onClick={() => navigate("/about")}>ABOUT US</button>
        ) : (
          <button onClick={() => navigate("/login")}>GET STARTED</button>
        )}
      </div>
      <div className="large-screen">
        <Carousel controls={false} indicators={false}>
          <Carousel.Item>
            <img src={Slider1} alt="slider 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Slider2} alt="slider 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Slider3} alt="slider 1" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="small-screen">
        <Carousel controls={false} indicators={false}>
          <Carousel.Item>
            <img src={MobileSlider1} alt="slider 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={MobileSlider2} alt="slider 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={MobileSlider3} alt="slider 1" />
          </Carousel.Item>
        </Carousel>
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  overflow: hidden;
  min-height:70vh;
  img{
    width:100vw;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    z-index: 5;
  }
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 8;
    color: white;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    h1 {
      font-size: 3rem;
      text-transform: uppercase;
    }
    p {
      text-align: center;
    }
    button {
      background: var(--primary);
      color: white;
      border: 2px solid var(--primary);
      padding: 0.8rem 3rem;
      transition: var(--transition);
      font-weight: 500;
      letter-spacing: 1px;
      &:hover {
        background: none;
        border: 2px solid var(--primary);
        color: white;
      }
    }
  }
  .small-screen {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: fit-content;
    position: relative;
    overflow: hidden;
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      z-index: 5;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 8;
      color: white;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding: 1rem;
      h1 {
        font-size: 2rem;
        text-transform: uppercase;
        text-align: center;
      }
      p {
        text-align: center;
        width: 70%;
      }
      button {
        background: var(--primary);
        color: white;
        border: 2px solid var(--primary);
        padding: 0.8rem 3rem;
        transition: var(--transition);
        font-weight: 500;
        letter-spacing: 1px;
        &:hover {
          background: none;
          border: 2px solid var(--primary);
          color: white;
        }
      }
    }
    .small-screen {
      display: none;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    height: fit-content;
    position: relative;
    overflow: hidden;
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      z-index: 5;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 8;
      color: white;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding: 1rem;
      h1 {
        font-size: 2rem;
        text-transform: uppercase;
        text-align: center;
      }
      p {
        text-align: center;
      }
      button {
        background: var(--primary);
        color: white;
        border: 2px solid var(--primary);
        padding: 0.8rem 3rem;
        transition: var(--transition);
        font-weight: 500;
        letter-spacing: 1px;
        &:hover {
          background: none;
          border: 2px solid var(--primary);
          color: white;
        }
      }
    }
    .small-screen {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: fit-content;
    position: relative;
    overflow: hidden;
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      z-index: 5;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 8;
      color: white;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding: 1rem;
      h1 {
        font-size: 2rem;
        text-transform: uppercase;
        text-align: center;
      }
      p {
        text-align: center;
        font-size: 0.8rem;
        width: 100%;
      }
      button {
        background: var(--primary);
        color: white;
        border: 2px solid var(--primary);
        padding: 0.8rem 3rem;
        transition: var(--transition);
        font-weight: 500;
        letter-spacing: 1px;
        font-size: 0.8rem;
        &:hover {
          background: none;
          border: 2px solid var(--primary);
          color: white;
        }
      }
    }
    .large-screen {
      display: none;
    }
    .small-screen {
      display: flex;
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default Hero;
