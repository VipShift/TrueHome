// Services.jsx
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../components";
import { Portfolio, ProfileCard } from "../components";

const translations = {
  ru: [
    {
      title: "Внутренние работы",
      services: [
        "Штукатурка и шпаклёвка",
        "Покраска стен и потолков",
        "Обои и натяжные потолки",
      ],
    },
    {
      title: "Отделка и напольные покрытия",
      services: [
        "Плитка в ванной и на кухне",
        "Ламинат, паркет, линолеум",
        "Монтаж гипсокартона",
      ],
    },
    {
      title: "Сантехника",
      services: [
        "Установка ванны, раковины, душа",
        "Замена труб",
        "Электрические водонагреватели",
      ],
    },
    {
      title: "Электрика",
      services: [
        "Монтаж электропроводки",
        "Розетки и выключатели",
        "Электрощиты",
      ],
    },
    {
      title: "Фасады",
      services: [
        "Внешнее утепление",
        "Штукатурка и покраска фасада",
        "Декоративная отделка",
      ],
    },
    {
      title: "Прочие работы",
      services: [
        "Демонтаж и разборка",
        "Установка межкомнатных дверей",
        "Индивидуальные работы",
      ],
    },
  ],

  es: [
    {
      title: "Trabajos internos",
      services: [
        "Enlucido y masillado",
        "Pintura de paredes y techos",
        "Papel pintado y techos tensados",
      ],
    },
    {
      title: "Acabados y suelos",
      services: [
        "Azulejos en baño y cocina",
        "Laminado, parquet, linóleo",
        "Montaje de pladur",
      ],
    },
    {
      title: "Fontanería",
      services: [
        "Instalación de bañera, lavabo, ducha",
        "Cambio de tuberías",
        "Calentadores eléctricos",
      ],
    },
    {
      title: "Electricidad",
      services: [
        "Instalación de cableado eléctrico",
        "Enchufes e interruptores",
        "Cuadros eléctricos",
      ],
    },
    {
      title: "Fachadas",
      services: [
        "Aislamiento exterior",
        "Enlucido y pintura de fachada",
        "Acabado decorativo",
      ],
    },
    {
      title: "Otros trabajos",
      services: [
        "Demolición y desmontaje",
        "Instalación de puertas interiores",
        "Trabajos individuales",
      ],
    },
  ],
};

const ServicesContainer = ({ className }) => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();
  const categories = translations[language]; // ✅ тут используем нужный язык

  return (
    <section className={className}>
      {/* Переключатель языка */}
      <button className="language-toggle" onClick={toggleLanguage}>
        {language === "ru" ? "🇪🇸 ES" : "🇷🇺 RU"}
      </button>
      <div className="services-header">
        <h1>{language === "ru" ? "Услуги" : "Servicios"}</h1>
        <h2>
          {language === "ru"
            ? "Мы предлагаем лучшие услуги для вашего дома или проекта"
            : "Ofrecemos los mejores servicios para su hogar o proyecto"}
        </h2>
      </div>
      <div className="services-grid">
        {categories.map((cat, index) => (
          <div key={index} className="service-category">
            <h3>{cat.title}</h3>
            <ul>
              {cat.services.map((srv, i) => (
                <li key={i}>{srv}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Portfolio />
      <ProfileCard />
      <div className="cta-block">
        <h2>
          {language === "ru"
            ? "Готовы начать свой проект?"
            : "¿Listo para comenzar su proyecto?"}
        </h2>
        <p>
          {language === "ru"
            ? "Позвоните нам или оставьте заявку — консультация бесплатна."
            : "Llámenos o deje una solicitud: la consulta es gratuita."}
        </p>
        <button onClick={() => navigate("/contact")}>
          {language === "ru" ? "Свяжитесь с нами сейчас" : "Contáctenos ahora"}
        </button>
      </div>
    </section>
  );
};

export const Services = styled(ServicesContainer)`
  /* Твой стиль Services.jsx 그대로 */
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  color: white;

  .services-header h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 10px;
    color: #fdb913;
  }

  .services-header h2 {
    font-size: 1.4rem;
    color: #ccc;
    margin-bottom: 60px;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }

  .service-category {
    background: rgba(26, 26, 26, 0.45);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 40px 30px;
    border-radius: 16px;
    text-align: left;
    transition: all 0.3s ease;
  }

  .service-category:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  }

  .service-category h3 {
    font-size: 1.5rem;
    color: #fdb913;
    margin-bottom: 20px;
  }

  .service-category ul {
    list-style: none;
    padding-left: 0;
  }

  .service-category li {
    font-size: 1rem;
    line-height: 1.8;
    color: #f0f0f0;
    position: relative;
    padding-left: 20px;
  }

  .service-category li::before {
    content: "✔";
    position: absolute;
    left: 0;
    color: #fdb913;
  }

  .cta-block {
    margin-top: 80px;
    background: rgba(26, 26, 26, 0.341);
    padding: 60px 20px;
    border-radius: 20px;
  }

  .cta-block h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 10px;
  }

  .cta-block p {
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 30px;
  }

  .cta-block button {
    background: #fdb913;
    color: #1a1a1a;
    border: none;
    padding: 16px 40px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .cta-block button:hover {
    background: #e5a50d;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(253, 185, 19, 0.3);
  }

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

  @media (max-width: 768px) {
    .services-header h1 {
      font-size: 2.2rem;
    }
    .services-header h2 {
      font-size: 1.1rem;
    }
    .service-category {
      padding: 25px 20px;
    }
    .cta-block {
      margin-top: 60px;
    }
  }
`;
