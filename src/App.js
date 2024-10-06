import "./App.css";
import UserDataProvider from "./context/UserDataProvider";
import Header from "./ui/components/Header"
import Slider from "./ui/components/dashboard/Sliders";
import Dashboard from "./ui/pages/Dashboard";
import BottomBar from "./ui/components/dashboard/BottomBar";
import ContactForm from "./ui/components/dashboard/ContactForm";
import Mentors from "./ui/components/dashboard/Mentor";
import AboutStartup from "./ui/components/dashboard/AboutStartup";
import Initiative from "./ui/components/dashboard/Initiative";
import Footer from "./ui/components/Footer"

// import Dashboard from "./ui/pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useWindowWidth from "./hooks/useWindowWidth"; // Import the custom hook

function App() {
  const windowWidth = useWindowWidth(); // Get the current window width

  return (
    <Router>
      {windowWidth >= 1040 && <Header />} 
      {windowWidth >= 1040 && <Slider/>}
      {windowWidth >= 1040 && <Initiative />}
      {windowWidth >= 1040 && <AboutStartup />}
      {windowWidth >= 1040 && <Mentors />}
      {windowWidth >= 1040 && <ContactForm />} 
      {windowWidth >= 1040 && <BottomBar />} 
      {windowWidth >= 1040 && <Footer />}
      <Routes>
        <Route
          path="/"
          element={
            <UserDataProvider>
              <Dashboard />
            </UserDataProvider>
          }
        />
      </Routes>
      {windowWidth < 1040 && <p>This site is currently under construction. Please visit on a desktop for full access.</p>} {/* Message for mobile users */}
    </Router>
  );
}

export default App;
