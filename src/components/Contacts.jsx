import styled from "styled-components";

const ContactsContainer = ({ className }) => {
  return (
    <div className={className}>
      <div className="social-container">
        <a
          href="https://www.instagram.com/timoshinalexandr/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button containerOne"
        >
          <img
            src="/icons/instagram.svg"
            alt="Instagram"
            className="socialSvg"
          />
        </a>

        <a
          href="https://wa.me/34677096557"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button containerFour"
        >
          <img src="/icons/whatsapp.svg" alt="WhatsApp" className="socialSvg" />
        </a>

        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://mywebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button containerThree"
        >
          <img src="/icons/facebook.svg" alt="Facebook" className="socialSvg" />
        </a>
      </div>
    </div>
  );
};

export const Contacts = styled(ContactsContainer)`
  .social-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px auto;
    margin-top: 30px; /* расстояние от формы */
  }

  /* общий стиль кнопок */
  .social-button {
    width: 52px;
    height: 52px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  /* hover эффект для всех кнопок */
  .social-button:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }

  /* svg иконки */
  .socialSvg {
    width: 24px;
    height: 24px;
  }

  .socialSvg path {
    fill: white;
  }

  /* анимация появления иконки */
  .social-button:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
