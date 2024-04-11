// i18nConfig.ts
export function getNamespaces() {
  return ["hero", "about", "projects"];
}

export function getOptions(
  locale,
  namespaces,
  resources,
) {
  const ns = namespaces !== undefined ? namespaces : getNamespaces();
  return {
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: ns[0],
    fallbackNS: ns[0],
    ns,
    preload: resources ? [] : i18nConfig.locales,
  };
}

// 这个属性必须要用默认导出
const i18nConfig = {
  defaultLocale: "en",
  locales: ["cn", "en"],
};
export default i18nConfig;