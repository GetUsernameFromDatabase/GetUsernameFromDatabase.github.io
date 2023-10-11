// import logo from './bg-light.jpg';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { idMap } from "./configuration/css-selectors";


function App() {
  return (
    <div id={idMap.appRoot}>
      <Header></Header>
      <main>
        <section className="main_section mt-40">
          <div className="container grid grid-cols-12 lg:gap-10">
            {/* Sidebar */}
            <Sidebar></Sidebar>
            {/* right site */}
            <MainContent></MainContent>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

