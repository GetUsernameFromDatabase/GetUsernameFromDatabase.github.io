import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './components/header';
import Sidebar from './components/sidebar';
import { mainRoutes } from './configuration/routes';
import LayoutMain from './layouts/layout-main';

function App() {
  return (
    <Router>
      <main className="bg-[url('/images/bg-light.jpg')] dark:bg-[url('/images/bg-dark.jpg')]">
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
