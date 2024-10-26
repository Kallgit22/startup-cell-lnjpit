import "./App.css";
import Header from "./ui/components/Header";
import Dashboard from "./ui/pages/Dashboard";
import Footer from "./ui/components/Footer";
import BottomBar from "./ui/components/dashboard/BottomBar";

// import Dashboard from "./ui/pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useWindowWidth from "./hooks/useWindowWidth"; // Import the custom hook
import About from "./ui/pages/About";
import Blog from "./ui/pages/Blog";
import Initiative from "./ui/pages/Initiative";
import Gallery from "./ui/pages/Gallery";
import IdeaRegistrationPage from "./ui/pages/IdeaRegistrationPage";
import BlogDetail from "./ui/pages/BlogDetail";
import InitiativeDetailsPage from "./ui/pages/InitiativeDetailsPage";

function App() {
  const windowWidth = useWindowWidth(); // Get the current window width
  return windowWidth >= 940 ? (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about/:section?" element={<About />} />
          <Route path="/initiatives/:section?" element={<Initiative />} />
          <Route path="/gallery/:section?" element={<Gallery />} />
          <Route
            path="/idea-submission/:section?"
            element={<IdeaRegistrationPage />}
          />
          <Route path="/blogs/:section?" element={<Blog />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/initiative/:id?" element={<InitiativeDetailsPage />} />
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
