import "./App.css";
import UserDataProvider from "./context/UserDataProvider";
import Header from "./ui/components/Header";
import Dashboard from "./ui/pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useWindowWidth from "./hooks/useWindowWidth"; // Import the custom hook

function App() {
  const windowWidth = useWindowWidth(); // Get the current window width

  return (
    <Router>
      {windowWidth >= 1040 && <Header />} {/* Render Header only for desktop */}
      <Routes>
        <Route
          path="/about"
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
