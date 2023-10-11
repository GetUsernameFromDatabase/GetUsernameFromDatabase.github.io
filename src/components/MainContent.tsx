import AboutPage from '../pages/AboutPage';
import MainMenu from './MainMenu';

const MainContent = () => {
  return (
    <div className='col-span-12 lg:col-span-8 rounded-2xl'>
      <MainMenu />
      <AboutPage />
    </div>
  );
};

export default MainContent;
