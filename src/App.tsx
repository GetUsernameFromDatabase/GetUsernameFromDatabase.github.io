/* eslint-disable security/detect-object-injection */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import type { AvailableThemes } from '../@types/theme-context';

import Header from './components/header';
import Sidebar from './components/sidebar';
import { mainRoutes } from './configuration/routes';
import { useThemeContext } from './contexts/theme/theme-context-hook';
import LayoutMain from './layouts/layout-main';

const backgroundImage: Record<AvailableThemes, string> = {
  dark: "url('./images/bg-dark.jpg')",
  light: "url('./images/bg-light.jpg')",
};

function App() {
  const { theme } = useThemeContext();
  return (
    <Router>
      <main
        className={`${theme}`}
        style={{ backgroundImage: backgroundImage[theme] }}
      >
        <Header></Header>
        <div className="container mt-40 grid grid-cols-12 lg:gap-10">
          <Sidebar id="personal-info-sidebar"></Sidebar>
          <Routes>
            <Route path="/" element={<LayoutMain />}>
              {mainRoutes.map((route, index) => (
                <Route key={index} {...route} />
              ))}
            </Route>
            <Route></Route>
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
