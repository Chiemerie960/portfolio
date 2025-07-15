import React from "react";
import styled from "styled-components";
import LandingImg from "../assets/home-bg.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Home = () => {
  return (
    <HomePage>
      <LazyLoadImage src={LandingImg} alt="HomeImage" />
      <div className="overlay">
        <div className="landing-text">
          <h2>
            CODE <span>BANDIT</span> &lt;/&gt;
          </h2>
          <p>
            I am a <span>Web & Mobile Developer</span>
          </p>
        </div>
      </div>
    </HomePage>
  );
};
const HomePage = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--overlay-color);
    display: flex;
    justify-content: center;
    align-items: center;
    .landing-text {
      text-align: center;
      color: var(--text-secondary-color);
      gap: 1rem;
      display: flex;
      flex-direction: column;
      padding-bottom: 2rem;
      h2 {
        font-size: 4rem;
        font-family: var(--text-heading);
        line-height: 74px;
        font-weight: 500;
        letter-spacing: 1px;
        span {
          color: var(--accent-color);
          font-weight: 900;
        }
      }
      p {
        font-size: 28px;
        font-family: var(--text-regular);
        font-weight: 300;
        line-height: 34px;
        span {
          font-weight: 700;
          border-bottom: 3px solid var(--accent-color);
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    .overlay {
      .landing-text {
        gap: 1rem;
        padding-bottom: 2rem;
        h2 {
          font-size: 3rem;
          span {
            color: var(--accent-color);
            font-weight: 900;
          }
        }
        p {
          font-size: 22px;
          font-family: var(--text-regular);
          font-weight: 300;
          line-height: 26px;
          span {
            font-weight: 700;
            border-bottom: 3px solid var(--accent-color);
          }
        }
      }
    }
  }
  @media screen and (max-width: 450px) {
    .overlay {
      .landing-text {
        gap: 1rem;
        padding-bottom: 2rem;
        h2 {
          font-size: 2.2rem;
          span {
            color: var(--accent-color);
            font-weight: 900;
          }
        }
        p {
          font-size: 18px;
          font-family: var(--text-regular);
          font-weight: 300;
          line-height: 22px;
          span {
            font-weight: 700;
            border-bottom: 3px solid var(--accent-color);
          }
        }
      }
    }
  }
`;
export default Home;
