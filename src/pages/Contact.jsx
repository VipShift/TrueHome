// Contact.jsx
import styled from "styled-components";
import { useLanguage } from "../components/LanguageContext"; // ✅
import { useState } from "react";
import { Contacts } from "../components";

const translations = {
  ru: {
    title: "Связаться с нами",
    subtitle:
      "Оставьте сообщение, и мы ответим вам в ближайшее время. Мы всегда рады новым проектам и идеям!",
    emailLabel: "Ваш Email:",
    messageLabel: "Сообщение:",
    submit: "Отправить",
    successTitle: "Спасибо за сообщение!",
    successText: "Мы свяжемся с вами в ближайшее время.",
  },
  es: {
    title: "Contáctenos",
    subtitle:
      "Déjenos un mensaje y le responderemos pronto. ¡Siempre estamos felices de nuevos proyectos e ideas!",
    emailLabel: "Tu correo electrónico:",
    messageLabel: "Mensaje:",
    submit: "Enviar",
    successTitle: "¡Gracias por tu mensaje!",
    successText: "Nos pondremos en contacto contigo pronto.",
  },
};

const ContactContainer = ({ className }) => {
  const { language, toggleLanguage } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Отправляем через Formspree
    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/xwkgabde", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        }
      })
      .catch(() => alert("Ошибка отправки. Попробуйте позже."));
  };

  return (
    <div className={className}>
      {/* Переключатель языка */}
      <button className="language-toggle" onClick={toggleLanguage}>
        {language === "ru" ? "🇪🇸 ES" : "🇷🇺 RU"}
      </button>

      <div className="contact-wrapper">
        <h1>{t.title}</h1>

        <Contacts />

        <p>{t.subtitle}</p>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label>
              {t.emailLabel}
              <input type="email" name="email" required />
            </label>

            <label>
              {t.messageLabel}
              <textarea name="message" required></textarea>
            </label>

            <button type="submit">{t.submit}</button>
          </form>
        ) : (
          <div className="success-message">
            <h2>{t.successTitle}</h2>
            <p>{t.successText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const Contact = styled(ContactContainer)`
  width: 100%;
  min-height: 100vh;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: white;
  position: relative;

  /* Language Toggle Button */
  .language-toggle {
    position: fixed;
    bottom: 50px;
    right: 40px;
    background: rgba(26, 26, 26, 0.341);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);
    color: #ffffff;
    padding: 12px 10px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 20px;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }

  .language-toggle:hover {
    background: #fdb913;
    transform: scale(1.05);
    box-shadow: 0 6px 30px rgba(253, 185, 19, 0.4);
  }

  .contact-wrapper {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border-radius: 16px;
    padding: 50px 40px;
    margin-top: 50px;
    max-width: 600px;
    width: 100%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #fdb913;
  }

  p {
    font-size: 1.1rem;
    color: #ddd;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  label {
    text-align: left;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
  }

  input,
  textarea {
    width: 100%;
    margin-top: 8px;
    padding: 12px 14px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 1rem;
    resize: none;
  }

  input {
    height: 45px;
  }

  textarea {
    min-height: 120px;
  }

  button[type="submit"] {
    margin-top: 20px;
    background: #fdb913;
    color: #1a1a1a;
    border: none;
    padding: 14px 0;
    font-size: 1.1rem;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button[type="submit"]:hover {
    background: #e5a50d;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(253, 185, 19, 0.3);
  }

  .success-message {
    text-align: center;
    color: #fff;
    animation: fadeIn 0.6s ease;
  }

  .success-message h2 {
    font-size: 2rem;
    color: #fdb913;
    margin-bottom: 10px;
  }

  .success-message p {
    color: #ddd;
    font-size: 1.1rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    padding: 60px 15px;
    .contact-wrapper {
      padding: 40px 25px;
    }
    h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 968px) {
    .language-toggle {
      bottom: 20px;
      right: 10px;
      padding: 10px 5px;
    }
  }
`;
