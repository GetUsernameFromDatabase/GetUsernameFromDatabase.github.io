import { useEffect, useState } from 'react';
import cssSelectors from '../configuration/css-selectors';

const cssClasses = {
  dark: 'dark',
  bgMain: { dark: 'bg-main-dark', light: 'bg-main-light' },
} as const;

function getElements() {
  const docElement = document.documentElement;
  const appRootElement = document.querySelector(cssSelectors.appRoot);
  return { docElement, appRootElement };
}

function setDarkTheme() {
  const { appRootElement, docElement } = getElements();

  docElement.classList.add(cssClasses.dark);
  if (appRootElement) {
    appRootElement.classList.remove(cssClasses.bgMain.light);
    appRootElement.classList.add(cssClasses.bgMain.dark);
  }
}

function setLightTheme() {
  const { appRootElement, docElement } = getElements();
  docElement.classList.remove(cssClasses.dark);
  if (appRootElement) {
    appRootElement.classList.remove(cssClasses.bgMain.dark);
    appRootElement.classList.add(cssClasses.bgMain.light);
  }
}

const useTheme = () => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    if (theme) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
    setTheme((prev) => !prev);
  };

  useEffect(() => setLightTheme(), [])
  return { theme: theme, toggleTheme };
};

export default useTheme;
