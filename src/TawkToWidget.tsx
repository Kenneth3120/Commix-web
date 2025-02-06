// TawkToWidget.tsx
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const TawkToWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/67a50676825083258e110d5d/1ijea2g59';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkToWidget;
