import "../styles/pages/pageContact.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { IContactForm, IContactFormData } from "../interfaces";

const contactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const PageContact = () => {
  const [firstNameList, setFirstNameList] = useState<IContactForm[]>([]);
  const [formData, setFormData] = useState<IContactFormData>(contactFormData);

  useEffect(() => {
    (async () => {
      const data = (await axios.get(`${backendUrl}/contacts`)).data;
      if (data.length > 0) {
        setFirstNameList(data);
      }
    })();
  }, []);

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
      setFormData(contactFormData);
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <div id="contact" className="pageContact">
      <h1>CONTACT ME</h1>
      <form>
        <div className="nameEmailContent">
          <div className="inputName">
            <input
              placeholder="NAME"
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="inputEmail">
            <input
              placeholder="EMAIL"
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>
        <div className="inputSubject">
          <input
            placeholder="SUBJECT"
            type="text"
            name="subject"
            onChange={handleChange}
            value={formData.subject}
          />
        </div>
        <div className="textAreaMessage">
          <textarea
            name="message"
            onChange={handleChangeMessage}
            value={formData.message}
            rows={10}
          />
        </div>
        <div className="button">
          <div>
            <button onClick={handleSubmitButton}>SEND MESSAGE!</button>
          </div>
        </div>
      </form>
    </div>
  );
};
