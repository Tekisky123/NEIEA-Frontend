import React, { useEffect } from "react";

const GoogleTranslate: React.FC = () => {
    useEffect(() => {
        const addScript = () => {
            if (window.google && window.google.translate) return;
            if (document.querySelector('script[src*="translate.google.com"]')) return;
            const script = document.createElement("script");
            script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);
        };

        window.googleTranslateElementInit = () => {
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

        addScript();
    }, []);

    return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;