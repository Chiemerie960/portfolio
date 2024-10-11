import React from "react";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactPage>
      <div className="contact-header">
        <h2>Contact Me</h2>
        <CiMail />
      </div>
      <div className="contact-form">
        <h2>Lets Talk</h2>
        <form>
          <div>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-bottom">
        <div>
          <IoIosSend />
          <h3>EmerieX@programmer.net</h3>
        </div>
        <div>
          <FaLocationDot />
          <h3>Lagos, Nigeria</h3>
        </div>
        <div>
          <IoCall />
          <h3>+234 906 097 3466</h3>
        </div>
      </div>
    </ContactPage>
  );
};
const ContactPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--bg-main);
  padding: 3rem 5rem;
  overflow: auto;
  .contact-header {
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
  .contact-form {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    align-items: center;
    border-top: 2px dotted var(--border);
    h2 {
      font-size: 22px;
      line-height: 22px;
      width: fit-content;
      margin-bottom: 2rem;
      font-family: var(--text-heading);
      font-weight: 700;
      color: var(--text-secondary-color);
      line-height: 36px;
      border-bottom: 2px solid var(--accent-color);
      text-transform: uppercase;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      width: 60%;
      div {
        display: flex;
        gap: 2rem;
        width: 100%;
        input {
          width: 100%;
          outline: none;
          background-color: transparent;
          border: 2px solid var(--border);
          padding: 1rem;
          font-size: 1rem;
          font-family: var(--text-regular);
          font-weight: 400;
          line-height: 26px;
          color: var(--text-paragraph);
        }
      }
      textarea {
        width: 100%;
        background-color: transparent;
        outline: none;
        border: 2px solid var(--border);
        padding: 1rem;
        font-size: 1rem;
        font-family: var(--text-regular);
        font-weight: 400;
        line-height: 26px;
        resize: none;
        color: var(--text-paragraph);
      }
      button {
        width: max-content;
        padding: 0.3rem 1rem;
        border: none;
        outline: none;
        background-color: transparent;
        border: 2px solid var(--accent-color);
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
  .contact-bottom {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding-top: 5rem;
    width: 100%;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      svg {
        font-size: 2.5rem;
        color: var(--accent-color);
      }
      h3 {
        font-size: 1.2rem;
        font-family: var(--text-heading);
        font-weight: 700;
        line-height: 26px;
        color: var(--text-paragraph);
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .contact-form {
      form {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 900px) {
    padding: 3rem 1rem;
    .contact-form {
      form {
        width: 100%;
      }
    }
      .contact-bottom {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
        padding-top: 5rem;
        width: 100%;
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          svg {
            font-size: 2.5rem;
            color: var(--accent-color);
          }
          h3 {
            font-size: 1.2rem;
            font-family: var(--text-heading);
            font-weight: 700;
            line-height: 26px;
  }
`;
export default Contact;
