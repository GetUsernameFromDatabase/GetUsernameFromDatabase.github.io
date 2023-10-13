// App.tsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './components/header';
import Sidebar from './components/sidebar';
import { idMap } from './configuration/css-selectors';
import AboutPage from './pages/about-page';
import BlogPage from './pages/blog-page';
import ContactPage from './pages/contact-page';
import Layout from './pages/layout';
import NoPage from './pages/no-page';
import ResumePage from './pages/resume-page';
import WorkPage from './pages/work-page';

function App() {
  return (
    <Router>
      <div id={idMap.appRoot}>
        <Header></Header>
        <main>
          <section className="mt-40">
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
