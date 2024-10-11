import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
import styled from "styled-components";

const Resume = () => {
  return (
    <ResumePage>
      <div className="resume-header">
        <h2>My Resume</h2>
        <FaRegNewspaper />
      </div>
      <div className="resume-details">
        <div className="experience">
          <h2>Experience</h2>
          <div>
            <h3>FRONTEND DEVELOPER</h3>
            <h5>Creme Suite Hotels | freelance</h5>
            <p>
              Developed and enhanced the user interface for the Creme Suite
              Hotels website, designing a visually appealing and intuitive
              experience that aligns with the hotel's elegant ambiance and brand
              identity. Focused on responsive design, usability, and maintaining
              a seamless guest journey across devices.
            </p>
          </div>
          <div>
            <h3>Developed Responsive Web Applications</h3>
            <h5>Freelance</h5>
            <p>
              Built and maintained responsive web applications using React.js,
              ensuring optimal performance and seamless user experience across
              different devices and browsers.
            </p>
          </div>
        </div>
        <div className="education">
          <h2>Education</h2>
          <div>
            <h3>BSc. COMPUTER SCIENCE</h3>
            <h5>Redeemer's University of Nigeria | 2023 - 2027</h5>
            <p>
              Currently pursuing a Bachelor's degree in Computer Science with a
              strong foundation in programming, data structures, and software
              development. Passionate about technology and constantly seeking
              opportunities to apply theoretical knowledge through practical
              projects and research.
            </p>
          </div>
          <div>
            <h3>Introduction to Web development</h3>
            <h5>Udemy | 2019 - 2020</h5>
            <p>
              Currently pursuing a Bachelor's degree in Computer Science with a
              strong foundation in programming, data structures, and software
              development. Passionate about technology and constantly seeking
              opportunities to apply theoretical knowledge through practical
              projects and research.
            </p>
          </div>
        </div>
      </div>
      <div className="coding-skills">
        <h2>Technologies</h2>
        <div className="technologies">
          <div>HTML</div>
          <div>CSS</div>
          <div>Javascript</div>
          <div>ReactJs</div>
          <div>Redux</div>
          <div>Bootstrap</div>
          <div>Tailwind</div>
        </div>
      </div>
    </ResumePage>
  );
};
const ResumePage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--bg-main);
  padding: 3rem 5rem;
  overflow: auto;
  .resume-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 2px dotted var(--border);
    h2 {
      font-size: 2.25rem;
      font-family: var(--text-heading);
      font-weight: 700;
      color: var(--accent-color);
      line-height: 36px;
    }
    svg {
      font-size: 2.25rem;
      color: var(--accent-color);
    }
  }
  .resume-details {
    display: flex;
    justify-content: space-between;
    padding-top: 3rem;
    border-top: 2px dotted var(--border);
    .experience {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      h2 {
        font-size: 22px;
        line-height: 22px;
        padding: 0 0.7rem;
        width: fit-content;
        font-family: var(--text-heading);
        font-weight: 700;
        color: var(--text-secondary-color);
        line-height: 36px;
        border-bottom: 2px solid var(--accent-color);
        text-transform: uppercase;
      }
      div {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        gap: 0.4rem;
        border-left: 2px solid var(--accent-color);
        h3 {
          font-size: 18px;
          font-family: var(--text-heading);
          font-weight: 700;
          color: var(--text-secondary-color);
          line-height: 26px;
        }
        h5 {
          font-size: 12px;
          font-family: var(--text-regular);
          font-weight: 600;
          color: var(--accent-color);
          line-height: 14px;
          text-transform: uppercase;
        }
        p {
          font-size: 0.8rem;
          font-family: var(--text-regular);
          font-weight: 400;
          color: var(--text-secondary-color);
          line-height: 22px;
        }
      }
    }
    .education {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      h2 {
        font-size: 22px;
        line-height: 22px;
        padding: 0 0.7rem;
        width: fit-content;
        font-family: var(--text-heading);
        font-weight: 700;
        color: var(--text-secondary-color);
        line-height: 36px;
        border-bottom: 2px solid var(--accent-color);
        text-transform: uppercase;
      }
      div {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        gap: 0.4rem;
        border-left: 2px solid var(--accent-color);
        h3 {
          font-size: 18px;
          font-family: var(--text-heading);
          font-weight: 700;
          color: var(--text-secondary-color);
          line-height: 26px;
        }
        h5 {
          font-size: 12px;
          font-family: var(--text-regular);
          font-weight: 600;
          color: var(--accent-color);
          line-height: 14px;
          text-transform: uppercase;
        }
        p {
          font-size: 0.8rem;
          font-family: var(--text-regular);
          font-weight: 400;
          color: var(--text-secondary-color);
          line-height: 22px;
        }
      }
    }
  }
  .coding-skills {
    margin-top: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    h2 {
      font-size: 22px;
      line-height: 22px;
      padding: 0 0.7rem;
      width: fit-content;
      font-family: var(--text-heading);
      font-weight: 700;
      color: var(--text-secondary-color);
      line-height: 36px;
      border-bottom: 2px solid var(--accent-color);
      text-transform: uppercase;
    }
    .technologies {
      display: flex;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;
      div {
        text-transform: uppercase;
        line-height: 14px;
        font-family: var(--text-regular);
        display: flex;
        align-items: center;
        padding: 0.8rem 1rem;
        font-size: 1rem;
        color: var(--text-secondary-color);
        border: 2px solid var(--accent-color);
        border-radius: 0.8rem;
        transition: var(--transition);
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    background-color: var(--bg-main);
    padding: 3rem 1rem;
    overflow: auto;
    .resume-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1rem;
      border-bottom: 2px dotted var(--border);
      h2 {
        font-size: 2.25rem;
        font-family: var(--text-heading);
        font-weight: 700;
        color: var(--accent-color);
        line-height: 36px;
      }
      svg {
        font-size: 2.25rem;
        color: var(--accent-color);
      }
    }
    .resume-details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 3rem;
      border-top: 2px dotted var(--border);
      .experience {
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        h2 {
          font-size: 22px;
          line-height: 22px;
          padding: 0 0.7rem;
          width: fit-content;
          font-family: var(--text-heading);
          font-weight: 700;
          color: var(--text-secondary-color);
          line-height: 36px;
          border-bottom: 2px solid var(--accent-color);
          text-transform: uppercase;
        }
        div {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          gap: 0.4rem;
          border-left: 2px solid var(--accent-color);
          h3 {
            font-size: 18px;
            font-family: var(--text-heading);
            font-weight: 700;
            color: var(--text-secondary-color);
            line-height: 26px;
          }
          h5 {
            font-size: 12px;
            font-family: var(--text-regular);
            font-weight: 600;
            color: var(--accent-color);
            line-height: 14px;
            text-transform: uppercase;
          }
          p {
            font-size: 0.8rem;
            font-family: var(--text-regular);
            font-weight: 400;
            color: var(--text-secondary-color);
            line-height: 22px;
          }
        }
      }
      .education {
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        h2 {
          font-size: 22px;
          line-height: 22px;
          padding: 0 0.7rem;
          width: fit-content;
          font-family: var(--text-heading);
          font-weight: 700;
          color: var(--text-secondary-color);
          line-height: 36px;
          border-bottom: 2px solid var(--accent-color);
          text-transform: uppercase;
        }
        div {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          gap: 0.4rem;
          border-left: 2px solid var(--accent-color);
          h3 {
            font-size: 18px;
            font-family: var(--text-heading);
            font-weight: 700;
            color: var(--text-secondary-color);
            line-height: 26px;
          }
          h5 {
            font-size: 12px;
            font-family: var(--text-regular);
            font-weight: 600;
            color: var(--accent-color);
            line-height: 14px;
            text-transform: uppercase;
          }
          p {
            font-size: 0.8rem;
            font-family: var(--text-regular);
            font-weight: 400;
            color: var(--text-secondary-color);
            line-height: 22px;
          }
        }
      }
    }
    .coding-skills {
      margin-top: 3rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      h2 {
        font-size: 22px;
        line-height: 22px;
        padding: 0 0.7rem;
        width: fit-content;
        font-family: var(--text-heading);
        font-weight: 700;
        color: var(--text-secondary-color);
        line-height: 36px;
        border-bottom: 2px solid var(--accent-color);
        text-transform: uppercase;
      }
    }
  }
`;

export default Resume;
