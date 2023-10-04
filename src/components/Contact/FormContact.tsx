export const prerender = true;
import { t } from "i18next";
import "./styles.scss";
import { useState, useRef } from "preact/hooks";

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
  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }

  return (
    <form
      action=""
      method="POST"
      class="contact-form"
      onSubmit={submit}
      ref={formRef}
    >
      <div class="content">
        <div class="left">
          <div class="input">
            <label for="name">{namelabel}</label>
            <input
              type="text"
              name="name"
              placeholder={nameplaceholder}
              required
            />
          </div>
          <div class="input">
            <label for="email">{emaillabel}</label>
            <input
              type="email"
              name="email"
              placeholder={emailplaceholder}
              required
            />
          </div>
          <div class="input">
            <label for="phone">{phonelabel}</label>
            <input
              type="number"
              name="phone"
              placeholder={phoneplaceholder}
              required
            />
          </div>
        </div>
        <div class="right">
          <div class="input">
            <label for="message">{messagelabel}</label>
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
      {responseMessage && <p class="response-message">{responseMessage}</p>}
    </form>
  );
}
