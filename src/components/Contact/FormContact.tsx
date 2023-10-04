import { t } from "i18next";
import "./styles.scss";
import { useState } from "preact/hooks";

export default function FormContact() {
  const [responseMessage, setResponseMessage] = useState("");
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
    }
  }

  return (
    <form action="" method="POST" class="contact-form" onSubmit={submit}>
      <div class="content">
        <div class="left">
          <div class="input">
            <label for="name">{t("contact_us.form.name")}</label>
            <input
              type="text"
              name="name"
              placeholder={t("contact_us.form.place_name") as string}
              required
            />
          </div>
          <div class="input">
            <label for="email">{t("contact_us.form.email")}</label>
            <input
              type="email"
              name="email"
              placeholder={t("contact_us.form.place_email") as string}
              required
            />
          </div>
          <div class="input">
            <label for="phone">{t("contact_us.form.phone")}</label>
            <input
              type="number"
              name="phone"
              placeholder={t("contact_us.form.place_phone") as string}
              required
            />
          </div>
        </div>
        <div class="right">
          <div class="input">
            <label for="message">{t("contact_us.form.message")}</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              required
              placeholder={t("contact_us.form.place_message") as string}
            ></textarea>
          </div>
        </div>
      </div>
      <button type="submit">
        {t("contact_us.form.send_button")}
        <slot name="icon"></slot>
      </button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}
