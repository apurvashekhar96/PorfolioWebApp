import "./App.css";

import Footer from "./components/Footer";
import HeaderSection from "./components/HeaderSection";
import SideNavigation from "./components/SideNavigation";

import MainContent from "./pages/MainContent";
import ModalPage from "./pages/ModalPage";
import useModalWindowContext from "./hooks/useModalWindowContext";

function App() {
  const { modalIsOpen } = useModalWindowContext();
  return (
    <div className="container mx-auto">
      <div>
        <HeaderSection />
      </div>
      <div className="grid contentBody">
        <div className="navigation pl-3 bg-primary-container min-h-full flex flex-col justify-center sideAnimation relative">
          <SideNavigation />
        </div>
        <div className="mainBody min-h-100">
          {modalIsOpen ? <ModalPage /> : <MainContent />}
        </div>
      </div>
      <div className="min-h-25 bg-secondary-container opacity-60">
        <Footer />
      </div>
    </div>
  );
}

export default App;

// ,
