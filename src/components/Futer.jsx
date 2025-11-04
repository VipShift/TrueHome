import styled from "styled-components";
import { Link } from "react-router-dom";

const FuterContainer = ({ className }) => {
  return (
    <footer className={className}>
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="logo-wrapper">
            <img src="/logo.png" alt="logo" />
          </div>
          <p className="copyright">
            &copy; 2025 TrueHome. All rights reserved..Developed by
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              {" "}
              Vitaliy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export const Futer = styled(FuterContainer)`
  margin: 60px auto 20px;
  max-width: 1300px;
  width: calc(100% - 1px);
  padding: 20px 15px;
  background: rgba(26, 26, 26, 0.341);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;

  .footer-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-shrink: 0;
  }

  .logo-wrapper img {
    width: 150px;
    height: auto;
  }

  .copyright {
    color: #9ca3af;
    font-size: 0.85rem;
    margin: 0;
  }

  // .footer-contact {
  //   flex-shrink: 0;
  // }

  // .phone {
  //   display: flex;
  //   align-items: center;
  //   gap: 8px;
  //   padding: 8px 16px;
  //   border-radius: 8px;
  //   background: #facc15;
  //   text-decoration: none;
  //   font-weight: 600;
  //   color: #1a1a1a;
  //   font-size: 0.9rem;
  //   transition: transform 0.3s, box-shadow 0.3s;
  // }

  // .phone img {
  //   width: 18px;
  //   height: 18px;
  //   transition: transform 0.3s;
  // }

  // .phone:hover {
  //   transform: scale(1.05);
  //   box-shadow: 0 4px 12px rgba(250, 204, 21, 0.4);
  // }

  @media (max-width: 768px) {
    margin: 40px auto 15px;
    width: calc(100% - 20px);
    padding: 15px 10px;

    .footer-inner {
      flex-direction: column;
      text-align: center;
      gap: 15px;
    }

    .footer-left {
      align-items: center;
    }

    .logo-wrapper img {
      width: 120px;
    }

    .phone {
      padding: 6px 12px;
      font-size: 0.85rem;
    }

    .phone img {
      width: 16px;
      height: 16px;
    }
  }
`;
