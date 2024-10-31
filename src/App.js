// App.js
import "./App.css";
import Header from "./ui/components/Header";
import Dashboard from "./ui/pages/Dashboard";
import Footer from "./ui/components/Footer";
import BottomBar from "./ui/components/dashboard/BottomBar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Route, Routes, useLocation } from "react-router-dom";
import useWindowWidth from "./hooks/useWindowWidth";
import About from "./ui/pages/About";
import Blog from "./ui/pages/Blog";
import Initiative from "./ui/pages/Initiative";
import Gallery from "./ui/pages/Gallery";
import IdeaRegistrationPage from "./ui/pages/IdeaRegistrationPage";
import BlogDetail from "./ui/pages/BlogDetail";
import InitiativeDetailsPage from "./ui/pages/InitiativeDetailsPage";
import AuthenticationPage from "./ui/pages/AuthenticationPage";
import ProfilePage from "./ui/pages/ProfilePage";
import AddsDialog from "./ui/components/custom/AddsDialog";

function App() {
  const windowWidth = useWindowWidth();
  const location = useLocation(); // Now you can safely use `useLocation`

  return (
    <div className="app">
      {/* Conditionally render the Header */}
      {location.pathname !== "/authentication" && <Header />}

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
        <Route path="/user-profile" element={<ProfilePage />} />
        <Route
          path="/authentication"
          element={
            <GoogleOAuthProvider clientId="<your_client_id>">
              <AuthenticationPage />
            </GoogleOAuthProvider>
          }
        />
      </Routes>

      {location.pathname !== "/authentication" && <BottomBar />}
      {/* Conditionally render the Footer */}
      {location.pathname !== "/authentication" && <Footer />}

      <AddsDialog/>
    </div>
  );
}

export default App;
