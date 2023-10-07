export const prerender = true;
import "./styles.scss";
import { useState, useRef } from "react";
import type { FormEvent } from "react";

export default function FormContact(props) {
  const {
    namelabel,
    nameplaceholder,
    emaillabel,
    emailplaceholder,
    phonelabel,
    phoneplaceholder,
    messagelabel,
    messageplaceholder,
    buttonlabel,
  } = props;

  const [responseMessage, setResponseMessage] = useState("");
  const formRef = useRef();
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      const lang = document.querySelector("html")?.getAttribute("lang");

      lang === "es"
        ? setResponseMessage(
            "¡Gracias por ponerte en contacto con nosotros! Tu mensaje ha sido enviado con éxito. Pronto nos pondremos en contacto contigo."
          )
        : setResponseMessage(data.message);
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }

  return (
    <form
      action=""
      method="POST"
      className="contact-form"
      onSubmit={submit}
      ref={formRef}
    >
      <div className="content">
        <div className="left">
          <div className="input">
            <label htmlFor="name">{namelabel}</label>
            <input
              type="text"
              name="name"
              placeholder={nameplaceholder}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="email">{emaillabel}</label>
            <input
              type="email"
              name="email"
              placeholder={emailplaceholder}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="phone">{phonelabel}</label>
            <input
              type="number"
              name="phone"
              placeholder={phoneplaceholder}
              required
            />
          </div>
        </div>
        <div className="right">
          <div className="input">
            <label htmlFor="message">{messagelabel}</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              required
              placeholder={messageplaceholder}
            ></textarea>
          </div>
        </div>
      </div>
      <button type="submit">{buttonlabel}</button>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </form>
  );
}
