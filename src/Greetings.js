import React from 'react';

function Greetings({ lang, children }) {
  function languages() {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
    }
  }
  return (
    <div>
      <p>
        {languages()}
        {children}
      </p>
    </div>
  );
}
export default Greetings;
