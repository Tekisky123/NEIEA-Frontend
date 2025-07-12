import React, { useEffect } from "react";

// Extend the Window interface to include google.translate
declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: any;
        TranslateElementInLineLayout?: {
          SIMPLE: number;
        };
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    const addScript = () => {
      // Remove existing script if any
      const existingScript = document.querySelector(
        'script[src*="translate.google.com"]'
      );
      if (existingScript) {
        existingScript.remove();
      }

      // Create new script
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    const googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ur,hi",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    // Attach init function to window
    window.googleTranslateElementInit = googleTranslateElementInit;

    addScript();

    // Cleanup function
    return () => {
      const script = document.querySelector('script[src*="translate.google.com"]');
      if (script) {
        document.body.removeChild(script);
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;