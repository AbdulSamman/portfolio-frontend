import "../styles/pages/pageContact.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { IContactFormData } from "../interfaces";
import { BsXCircle, BsCheckCircle } from "react-icons/bs";

const contactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  capture: "",
};

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const PageContact = () => {
  const [formData, setFormData] = useState<IContactFormData>(contactFormData);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isMessageValid, setIsMessageValid] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [isSubjectValid, setIsSubjectValid] = useState<boolean>(false);
  const [isFormSended, setIsFormSended] = useState<any>(null);
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    const randomFirstNumber = Math.floor(Math.random() * 49) + 1;
    const randomSecondNumber = Math.floor(Math.random() * 49) + 1;
    setFirstNumber(randomFirstNumber);
    setSecondNumber(randomSecondNumber);
    setIsFormSended(null);
  }, []);

  // Email validation function
  const emailCheck = (email: string): boolean => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const handleSubmit = async (formData: IContactFormData) => {
    try {
      const data = await axios.post(
        `${backendUrl}/contact`,
        {
          ...formData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (isFormSended) {
        setResult(0);
        setFormData(contactFormData);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      const _isEmailValid = emailCheck(value);
      setIsEmailValid(_isEmailValid);
    } else if (name === "name") {
      const _isNameValid = value.length > 2;
      setIsNameValid(_isNameValid);
    } else if (name === "subject") {
      const _isSubjectValid = value.length > 2;
      setIsSubjectValid(_isSubjectValid);
    } else if (name === "capture") {
      const result: number = firstNumber + secondNumber;
      if (parseInt(value) === result) {
        setResult(parseInt(value));
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "message") {
      const _isMessageValid = value.length > 4;
      setIsMessageValid(_isMessageValid);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit(formData);
    if (
      isEmailValid &&
      isMessageValid &&
      isNameValid &&
      isSubjectValid &&
      result
    ) {
      setIsFormValid(true);
      setIsFormSended(
        <span className="messageTrue">
          <BsCheckCircle /> <p>Thank you, your message has been sent</p>
        </span>
      );
      setFormData(contactFormData);
    } else {
      setIsFormSended(
        <span className="messageFalse">
          <BsXCircle /> <p>Please check your information</p>
        </span>
      );
    }
  };

  return (
    <div id="contact" className="pageContact">
      <h1>CONTACT ME</h1>

      {isFormSended && <div className="messageRow">{isFormSended}</div>}
      <form>
        <div className="nameEmailContent">
          <div className={`inputName ${isNameValid ? "" : "nameNotValid"}`}>
            <input
              placeholder="NAME"
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className={`inputEmail ${isEmailValid ? "" : "emailNotValid"}`}>
            <input
              placeholder="EMAIL"
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>
        <div
          className={`inputSubject ${isSubjectValid ? "" : "subjectNotValid"}`}
        >
          <input
            placeholder="SUBJECT"
            type="text"
            name="subject"
            onChange={handleChange}
            value={formData.subject}
          />
        </div>
        <div
          className={`textAreaMessage  ${
            !isMessageValid ? "messageNotValid" : ""
          }`}
        >
          <textarea
            name={`message`}
            onChange={handleChangeMessage}
            value={formData.message}
            rows={10}
          />
        </div>
        <div className="row">
          <div className="capture">
            <div className="numbers">
              <span>{firstNumber}</span>+<span>{secondNumber}</span>
            </div>

            <input
              value={formData.capture}
              type="text"
              required
              name="capture"
              onChange={handleChange}
            />
          </div>
          <div className="button">
            <button onClick={handleSubmitButton}>SEND MESSAGE!</button>
          </div>
        </div>
      </form>
    </div>
  );
};
