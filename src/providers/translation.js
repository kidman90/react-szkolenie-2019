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

export const LanguageSwitch = ({ to, children }) => (
  <Translation.Consumer>
    {context =>
      <button
        onClick={() => context.setLanguage(to)}
        style={{ borderStyle: context.language === to ? 'inset' : 'outset' }}
      >
        {children}
      </button>}
  </Translation.Consumer>
);

export const T = ({ as, label, ...props }) => (
  <Translation.Consumer>
    {context => React.createElement(
      as,
      props,
      context.labels[label] && context.labels[label][context.language]
        ? context.labels[label][context.language]
        : label
    )}
  </Translation.Consumer>
); 
