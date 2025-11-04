// src/components/ProfileCard.jsx
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useLanguage } from "./LanguageContext";

const translations = {
  ru: {
    aboutTitle: "Обо мне",
    aboutText:
      "Я живу с семьёй в Льорет-де-Мар уже три года. Женат, у меня дружная семья и четверо замечательных детей. Мне нравится жизнь в Испании, особенно море, путешествия, дайвинг и парусный спорт.",
    personalTitle: "Личные данные",
    name: "Имя",
    birthDate: "Дата рождения",
    spanishLevel: "Уровень испанского",
    residence: "Место жительства",
    maritalStatus: "Семейное положение",
    hobbies: "Увлечения",
    nameValue: "Александр Тимошин",
    birthDateValue: "8 декабря 1980 года",
    spanishLevelValue: "базовый",
    residenceValue: "Льорет-де-Мар (уже 3 года)",
    maritalStatusValue: "Женат, отец четырёх детей",
    hobbiesValue: "путешествия, дайвинг, парусный спорт",
  },
  es: {
    aboutTitle: "Sobre mí",
    aboutText:
      "Vivo con mi familia en Lloret de Mar desde hace tres años. Estoy casado y tengo una familia unida con cuatro hijos maravillosos. Me gusta la vida en España, especialmente el mar, los viajes, el buceo y la navegación.",
    personalTitle: "Datos personales",
    name: "Nombre",
    birthDate: "Fecha de nacimiento",
    spanishLevel: "Nivel de español",
    residence: "Lugar de residencia",
    maritalStatus: "Estado civil",
    hobbies: "Aficiones",
    nameValue: "Aleksandr Timoshin",
    birthDateValue: "8 de diciembre de 1980",
    spanishLevelValue: "básico",
    residenceValue: "Lloret de Mar (3 años)",
    maritalStatusValue: "Casado, padre de cuatro hijos",
    hobbiesValue: "viajes, buceo, navegación",
  },
};

const ProfileCardContainer = ({ className }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const photos = [
    "/about/photo1.jpg",
    "/about/photo2.jpg",
    "/about/photo3.jpg",
  ];
  const photoRefs = useRef([]);
  const [visiblePhotos, setVisiblePhotos] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisiblePhotos((prev) => [...prev, entry.target.dataset.index]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    photoRefs.current.forEach((photo) => observer.observe(photo));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={className}>
      <div className="top-section">
        {/* Галерея фото */}
        <div className="photo-gallery">
          {photos.map((src, index) => (
            <div
              key={index}
              ref={(el) => (photoRefs.current[index] = el)}
              data-index={index}
              className={`photo-wrapper ${
                visiblePhotos.includes(index.toString()) ? "visible" : ""
              }`}
            >
              <img src={src} alt={`Фото ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Личная информация */}
        <div className="profile-info">
          <section className="about-me">
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
          </section>

          <section className="personal-details">
            <h2>{t.personalTitle}</h2>
            <ul>
              <li>
                <span className="label">{t.name}:</span>
                <span className="value">{t.nameValue}</span>
              </li>
              <li>
                <span className="label">{t.birthDate}:</span>
                <span className="value">{t.birthDateValue}</span>
              </li>
              <li>
                <span className="label">{t.spanishLevel}:</span>
                <span className="value">{t.spanishLevelValue}</span>
              </li>
              <li>
                <span className="label">{t.residence}:</span>
                <span className="value">{t.residenceValue}</span>
              </li>
              <li>
                <span className="label">{t.maritalStatus}:</span>
                <span className="value">{t.maritalStatusValue}</span>
              </li>
              <li>
                <span className="label">{t.hobbies}:</span>
                <span className="value">{t.hobbiesValue}</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

// Стили
export const ProfileCard = styled(ProfileCardContainer)`
  max-width: 850px;
  margin: 50px auto;
  background: rgba(20, 20, 20, 0.55);
  border-radius: 25px;
  color: #fff;
  backdrop-filter: blur(15px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  .top-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    padding: 40px;
  }

  .photo-gallery {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    flex: 0 0 auto;
  }

  .photo-wrapper {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    opacity: 0;
    transform: translateY(40px);
    transition: transform 0.3s ease, opacity 0.8s ease;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .profile-info {
    flex: 1 1 400px;
    max-width: 500px;

    section {
      margin-bottom: 25px;
    }

    h2 {
      font-size: 2rem;
      color: #fdb913;
      margin-bottom: 15px;
    }

    p {
      font-size: 1rem;
      color: #ccc;
      line-height: 1.7;
      text-align: justify;
    }

    ul {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: max-content 1fr;
      gap: 10px 20px;
    }

    .label {
      color: #fdb913;
      white-space: nowrap;
    }

    .value {
      color: #fff;
    }

    li {
      display: contents;
      font-size: 1rem;
    }
  }

  @media (max-width: 1024px) {
    .top-section {
      flex-direction: column;
      align-items: center;
      gap: 30px;
      padding: 30px 20px;
    }

    .photo-gallery {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }

    .photo-wrapper {
      width: 100px;
      height: 100px;
    }

    .profile-info {
      text-align: center;
    }

    .profile-info ul {
      grid-template-columns: 1fr;
      gap: 10px 0;
    }
  }

  @media (max-width: 480px) {
    .photo-wrapper {
      width: 70px;
      height: 70px;
    }

    .profile-info li,
    .profile-info p {
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;
