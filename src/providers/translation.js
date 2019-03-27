import React, { useState, useContext } from 'react';

const Translation = React.createContext({
  labels: {
    'Zaloguj': { pl: 'Zaloguj', en: 'Login' },
    'Podaj imię': { pl: 'Podaj imię', en: 'Enter your name' },
    'Witaj na chacie!': { pl: 'Witaj na chacie!', en: 'Welcome to the chat!' },
    'Wyświetl jako lista': { pl: 'Wyświetl jako lista', en: 'Display as a list' },
    'Wyświetl jako bąbelki': { pl: 'Wyświetl jako bąbelki', en: 'Display as bubbles' },
    'Brak danych': { pl: 'Brak danych', en: 'No data' },
    'Trwa pobieranie danych': { pl: 'Trwa pobieranie danych', en: 'Loading' }
  }
});

export const TranslationProvider = ({ lang = 'pl', children }) => {
  const [language, setLanguage] = useState(lang);
  const { labels } = useContext(Translation);

  return (
    <Translation.Provider value={{
      labels,
      language,
      setLanguage
    }}>
      {children}
    </Translation.Provider>
  );
};

export const LanguageSwitch = ({ to, children }) => {
  const { language, setLanguage } = useContext(Translation);

  return (
    <button
      onClick={() => setLanguage(to)}
      style={{ borderStyle: language === to ? 'inset' : 'outset' }}
    >
      {children}
    </button>
  );
};

export const T = ({ as, label, ...props }) => {
  const { labels, language } = useContext(Translation);

  return React.createElement(
    as,
    props,
    labels[label] && labels[label][language]
      ? labels[label][language]
      : label
  );
}; 
