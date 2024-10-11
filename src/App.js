import "./App.css";
import UserDataProvider from "./context/UserDataProvider";
import Header from "./ui/components/Header";
import Dashboard from "./ui/pages/Dashboard";
import Footer from "./ui/components/Footer";
import BottomBar from "./ui/components/dashboard/BottomBar";

// import Dashboard from "./ui/pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useWindowWidth from "./hooks/useWindowWidth"; // Import the custom hook
import About from "./ui/pages/About";
import Initiative from "./ui/pages/Initiative";
import Gallery from "./ui/pages/Gallery";
import IdeaRegistrationPage from "./ui/pages/IdeaRegistrationPage";

function App() {
  const windowWidth = useWindowWidth(); // Get the current window width
  return windowWidth >= 1440 ? (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <UserDataProvider>
                <Dashboard />
              </UserDataProvider>
            }
          />
          <Route
            path="/about/:section?"
            element={
              <UserDataProvider>
                <About />
              </UserDataProvider>
            }
          />
          <Route
            path="/initiatives/:section?"
            element={
              <UserDataProvider>
                <Initiative />
              </UserDataProvider>
            }
          />
          <Route
            path="/gallery/:section?"
            element={
              <UserDataProvider>
                <Gallery />
              </UserDataProvider>
            }
          />
          <Route
            path="/idea-submission/:section?"
            element={
              <UserDataProvider>
                <IdeaRegistrationPage/>
              </UserDataProvider>
            }
          />
        </Routes>
        <BottomBar />
        <Footer />
      </Router>
    </div>
  ) : (
    <div>
      <h1>Only Accesible in Dekstop</h1>
    </div>
  );
}

export default App;
