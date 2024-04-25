export const enLang = "en";
export const cnLang = "cn";
export const fallbackLng = enLang;
export const languages = [fallbackLng, cnLang, enLang];
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
