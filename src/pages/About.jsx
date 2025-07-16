import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoIosLaptop } from "react-icons/io";
import { IoEyeOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import styled from "styled-components";

const About = () => {
  const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/assets/Emerie.pdf';
  link.setAttribute('download', 'Emerie-Eze-Resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <Aboutme>
      <div className="about-header">
        <h2>About Me</h2>
        <FaRegUser />
      </div>
      <div className="about-details">
        <div className="about-text">
          <h2>Web & Mobile developer</h2>
          <p>
            I am a Frontend and Mobile Developer. I am passionate about creating
            beautiful and intuitive user interfaces. I am always looking for new
            and innovative ways to improve my skills with tools such as ReactJs,
            ReactNative, Bootstrap, Tailwindcss and many others .
          </p>
          <p>
            I have a keen eye for design and a strong focus on delivering
            seamless user experiences. Throughout my career, I've worked on a
            wide range of projects, from e-commerce platforms to single-page
            applications, collaborating with designers and back-end developers
            to create engaging and functional websites and mobile applications.
          </p>
          <p>
            I thrive in fast-paced environments and enjoy learning new
            technologies to enhance my skill set. When I'm not coding, I love
            exploring UI/UX trends and contributing to open-source projects.
          </p>
        </div>
        <div className="personal-info">
          <h2>Personal Information</h2>
          <div className="info">
            <p>
              <span>Name</span> : Emerie Eze
            </p>
            <p>
              <span>Age</span> : 17
            </p>
            <p>
              <span>Residence</span> : Lagos, Nigeria
            </p>
            <p>
              <span>Phone</span> : +234 906 097 3466
            </p>
            <p>
              <span>Email</span> : EmerieX@programmer.net
            </p>
            <p>
              <span>Freelance</span> : Available
            </p>
            <button onClick={handleDownload}>Download Resume</button>
          </div>
        </div>
      </div>
      <div className="service">
        <h2 className="service-header">SERVICES</h2>
        <div className="service-container">
          <div>
            <IoIosLaptop />
            <h3>Web Development</h3>
            <p>
              I can build beautiful and scalable websites that not only provide
              an exceptional user experience but are also optimized for
              performance and maintainability.
            </p>
          </div>
          <div>
            <IoPhonePortraitOutline />
            <h3>Mobile Development</h3>
            <p>
              I develop cross-platform mobile applications that run smoothly on
              both Android and iOS, ensuring consistency, performance, and a
              great user experience.
            </p>
          </div>
          <div>
            <IoEyeOutline />
            <h3>Web Design</h3>
            <p>
              I create visually appealing and user-friendly websites by
              combining elements of layout, color, typography, and interactive
              functionality to enhance the overall user experience.
            </p>
          </div>
          <div>
            <MdDevices />
            <h3>Responsive Design</h3>
            <p>
              I ensure that websites automatically adjust and provide an optimal
              viewing experience across all devices, from desktops to
              smartphones, by adapting layout, content, and functionality to
              different screen sizes.
            </p>
          </div>
        </div>
      </div>
    </Aboutme>
  );
};
const Aboutme = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--bg-main);
  padding: 3rem 5rem;
  overflow: auto;
  .about-header {
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
  .about-details {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    .about-text {
      flex-basis: 60%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h2 {
        font-size: 1.35rem;
        text-transform: capitalize;
        font-family: var(--text-heading);
        font-weight: 700;
        color: var(--text-secondary-color);
        line-height: 36px;
      }
      p {
        font-size: 1rem;
        font-family: var(--text-regular);
        font-weight: 400;
        line-height: 26px;
        text-align: justify;
        color: var(--text-paragraph);
      }
    }
    .personal-info {
      flex-basis: 30%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h2 {
        font-size: 1.35rem;
        text-transform: capitalize;
        font-family: var(--text-heading);
        font-weight: 700;
        color: var(--text-secondary-color);
        line-height: 36px;
      }
      .info {
        display: flex;
        flex-direction: column;
        p {
          font-size: 1rem;
          font-family: var(--text-regular);
          font-weight: 400;
          line-height: 26px;
          color: var(--text-paragraph);
          margin-bottom: 15px;
          span {
            font-weight: 700;
            color: var(--text-secondary-color);
            font-family: var(--text-heading);
            font-size: 1rem;
            line-height: 1rem;
            border-bottom: 2px solid var(--accent-color);
          }
        }
        button {
          width: max-content;
          padding: 0.5rem 1rem;
          border: 2px solid var(--accent-color);
          background-color: transparent;
          color: var(--text-secondary-color);
          font-size: 1rem;
          font-family: var(--text-regular);
          font-weight: 400;
          line-height: 26px;
          cursor: pointer;
          transition: var(--transition);
          &:hover {
            background-color: var(--accent-color);
          }
        }
      }
    }
  }
  .service {
    margin-top: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    .service-header {
      text-align: center;
      width: max-content;
      font-size: 1.35rem;
      text-transform: capitalize;
      font-family: var(--text-heading);
      font-weight: 700;
      color: var(--text-secondary-color);
      line-height: 36px;
      border-bottom: 3px solid var(--accent-color);
    }
    .service-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-top: 1rem;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        svg {
          font-size: 3.5rem;
          color: var(--accent-color);
        }
        h3 {
          font-size: 18px;
          text-transform: capitalize;
          font-family: var(--text-heading);
          font-weight: 600;
          color: var(--text-secondary-color);
          line-height: 22px;
        }
        p {
          font-size: 15px;
          font-family: var(--text-regular);
          font-weight: 400;
          line-height: 22px;
          text-align: justify;
          color: var(--text-paragraph);
          text-align: center;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .about-header {
      h2 {
        font-size: 2rem;
        font-family: var(--text-heading);
        font-weight: 700;
        color: var(--accent-color);
        line-height: 30px;
      }
      svg {
        font-size: 2rem;
        color: var(--accent-color);
      }
    }
    .about-details {
      gap: 2rem;
      .about-text {
        flex-basis: 60%;
        h2 {
          font-size: 1rem;
          line-height: 30px;
        }
        p {
          font-size: 0.8rem;
          font-family: var(--text-regular);
          font-weight: 400;
          line-height: 26px;
          text-align: justify;
          color: var(--text-paragraph);
        }
      }
      .personal-info {
        flex-basis: 40%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h2 {
          font-size: 1rem;
          line-height: 30px;
        }
        .info {
          p {
            font-size: 0.8rem;
            font-family: var(--text-regular);
            font-weight: 400;
            line-height: 26px;
            color: var(--text-paragraph);
            margin-bottom: 15px;
            span {
              font-weight: 700;
              color: var(--text-secondary-color);
              font-family: var(--text-heading);
              font-size: 1rem;
              line-height: 1rem;
              border-bottom: 2px solid var(--accent-color);
            }
          }
          button {
            width: max-content;
            padding: 0.5rem 1rem;
            border: 2px solid var(--accent-color);
            background-color: transparent;
            color: var(--text-secondary-color);
            font-size: 1rem;
            font-family: var(--text-regular);
            font-weight: 400;
            line-height: 26px;
            cursor: pointer;
            transition: var(--transition);
            &:hover {
              background-color: var(--accent-color);
            }
          }
        }
      }
    }
    .service {
      margin-top: 3rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      .service-header {
        text-align: center;
        width: max-content;
        font-size: 1.35rem;
        text-transform: capitalize;
        font-family: var(--text-heading);
        font-weight: 700;
        color: var(--text-secondary-color);
        line-height: 36px;
        border-bottom: 3px solid var(--accent-color);
      }
      .service-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        margin-top: 1rem;
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          svg {
            font-size: 3.5rem;
            color: var(--accent-color);
          }
          h3 {
            font-size: 18px;
            text-transform: capitalize;
            font-family: var(--text-heading);
            font-weight: 600;
            color: var(--text-secondary-color);
            line-height: 22px;
          }
          p {
            font-size: 15px;
            font-family: var(--text-regular);
            font-weight: 400;
            line-height: 22px;
            text-align: justify;
            color: var(--text-paragraph);
            text-align: center;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 3rem 1rem;
    .about-header {
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
    .about-details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 3rem;
      .about-text {
        flex-basis: 60%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h2 {
          font-size: 1.35rem;
          text-transform: capitalize;
          font-family: var(--text-heading);
          font-weight: 700;
          color: var(--text-secondary-color);
          line-height: 36px;
        }
        p {
          font-size: 1rem;
          font-family: var(--text-regular);
          font-weight: 400;
          line-height: 26px;
          text-align: left;
          color: var(--text-paragraph);
        }
      }
      .personal-info {
        flex-basis: 30%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h2 {
          font-size: 1.35rem;
          text-transform: capitalize;
          font-family: var(--text-heading);
          font-weight: 700;
          color: var(--text-secondary-color);
          line-height: 36px;
        }
        .info {
          display: flex;
          flex-direction: column;
          p {
            font-size: 1rem;
            font-family: var(--text-regular);
            font-weight: 400;
            line-height: 26px;
            color: var(--text-paragraph);
            margin-bottom: 15px;
            span {
              font-weight: 700;
              color: var(--text-secondary-color);
              font-family: var(--text-heading);
              font-size: 1rem;
              line-height: 1rem;
              border-bottom: 2px solid var(--accent-color);
            }
          }
          button {
            width: max-content;
            padding: 0.5rem 1rem;
            border: 2px solid var(--accent-color);
            background-color: transparent;
            color: var(--text-secondary-color);
            font-size: 1rem;
            font-family: var(--text-regular);
            font-weight: 400;
            line-height: 26px;
            cursor: pointer;
            transition: var(--transition);
            &:hover {
              background-color: var(--accent-color);
            }
          }
        }
      }
    }
    .service {
      margin-top: 3rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      .service-header {
        text-align: center;
        width: max-content;
        font-size: 1.35rem;
        text-transform: capitalize;
        font-family: var(--text-heading);
        font-weight: 700;
        color: var(--text-secondary-color);
        line-height: 36px;
        border-bottom: 3px solid var(--accent-color);
      }
      .service-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
        margin-top: 1rem;
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          svg {
            font-size: 3.5rem;
            color: var(--accent-color);
          }
          h3 {
            font-size: 18px;
            text-transform: capitalize;
            font-family: var(--text-heading);
            font-weight: 600;
            color: var(--text-secondary-color);
            line-height: 22px;
          }
          p {
            font-size: 15px;
            font-family: var(--text-regular);
            font-weight: 400;
            line-height: 22px;
            text-align: justify;
            color: var(--text-paragraph);
            text-align: center;
          }
        }
      }
    }
  }
`;
export default About;
