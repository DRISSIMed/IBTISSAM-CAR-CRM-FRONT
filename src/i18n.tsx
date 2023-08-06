import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from "./features/Translation/English/translation.json";
import  translationFrench from "./features/Translation/French/translation.json";
import translationArabic from "./features/Translation/Arabic/translation.json";

const resources = {
    en: {
        translation: translationEnglish,
    },
    fr: {
        translation: translationFrench,
    },
    ar:{
        translation: translationArabic,
    }
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"en", //default language
});

export default i18next;