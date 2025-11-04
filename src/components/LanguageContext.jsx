// src/components/LanguageContext.jsx

import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ru");

  // загрузка сохранённого языка при монтировании
  useEffect(() => {
    try {
      const saved = localStorage.getItem("app_language");
      if (saved) setLanguage(saved);
    } catch (e) {
      // ignore
    }
  }, []);

  // сохраняем в localStorage при изменении
  useEffect(() => {
    try {
      localStorage.setItem("app_language", language);
    } catch (e) {}
  }, [language]);

  const toggleLanguage = () => setLanguage((p) => (p === "ru" ? "es" : "ru"));

  return (
    <LanguageContext.Provider
      className="language-toggle"
      value={{ language, setLanguage, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
