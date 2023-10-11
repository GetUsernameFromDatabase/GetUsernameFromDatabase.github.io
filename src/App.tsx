// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import NoPage from './pages/NoPage';
import ResumePage from './pages/ResumePage';
import WorkPage from './pages/WorkPage';
import Sidebar from './components/Sidebar';
import { idMap } from './configuration/css-selectors';
import Header from './components/Header';
import Layout from './pages/Layout';

function App() {
  return (
    <Router>
      <div id={idMap.appRoot}>
        <Header></Header>
        <main>
          <section className="main_section mt-40">
            <div className="container grid grid-cols-12 lg:gap-10">
              <Sidebar></Sidebar>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<AboutPage />} />
                  <Route path="blog" element={<BlogPage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="resume" element={<ResumePage />} />
                  <Route path="works" element={<WorkPage />} />
                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
            </div>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
