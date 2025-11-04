import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const HeaderContainer = ({ className }) => {
  const handlePhoneClick = (e) => {
    e.preventDefault(); // отменяем переход по ссылке

    const phoneNumber = "+34 677 096 557"; // твой номер телефона

    // Копируем в буфер обмена
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert(`Phone number copied: ${phoneNumber}`);
      })
      .catch(() => {
        alert("Failed to copy phone number.");
      });
  };

  return (
    <header className={className}>
      <div className="container header-inner">
        <div className="logo-wrapper">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>

        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>

        <div className="phone" onClick={handlePhoneClick}>
          <img src="/phone.svg" alt="Phone" />
        </div>
      </div>
    </header>
  );
};

export const Header = styled(HeaderContainer)`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%); /* центрируем через transform */
  max-width: 1200px;
  width: calc(100% - 40px); /* отступы по бокам */
  padding: 15px 10px;
  border-top: 0.5px solid rgba(255, 255, 255, 1);
  border-bottom: 0.5px solid rgba(255, 255, 255, 1);
  z-index: 100;
  background: rgba(26, 26, 26, 0.341);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px; /* добавил скругление для красоты */

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px; /* увеличил gap */
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    font-size: 13px;
    gap: 8px;
    flex-shrink: 0; /* не сжимается */
  }

  .logo-wrapper img {
    width: 150px;
    height: auto;
  }

  .nav {
    display: flex;
    gap: 24px; /* увеличил расстояние между ссылками */
    flex-wrap: nowrap;
    font-size: 0.85rem;
    align-items: center;
    justify-content: center;
    flex: 1; /* занимает всё доступное пространство и центрирует содержимое */
  }

  .nav-link {
    font-size: 0.85rem;
    color: #ebecee;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s;
    white-space: nowrap; /* не переносить текст */
  }

  .nav-link:hover,
  .nav-link.active {
    color: #facc15;
  }

  .phone {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 8px;
    border-radius: 8px;
    background: #facc15;
    text-decoration: none;
    font-weight: 500;
    transition: transform 0.3s, box-shadow 0.3s;
    flex-shrink: 0; /* не сжимается */
  }

  .phone img {
    width: 18px;
    height: 18px;
    transition: transform 0.3s;
  }

  .phone:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 600px) {
    top: 5px;
    width: calc(100% - 20px);
    padding: 10px 8px;

    .logo-wrapper img {
      width: 100px;
    }

    .header-inner {
      gap: 6px;
    }

    .nav {
      gap: 8px;
    }

    .nav-link {
      font-size: 0.8rem;
    }

    .phone {
      padding: 4px 6px;
    }

    .phone img {
      width: 16px;
      height: 16px;
    }
  }
`;
