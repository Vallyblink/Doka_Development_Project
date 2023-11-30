import { useSelector } from "react-redux";
import { getLanguage } from "../Redux/localization/localization-action";

export const useTranslation = (langs) => {
  const selectedLanguage = useSelector(getLanguage);

  return langs[selectedLanguage] || langs.ua;
};