import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const App = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <Layout navigate={handleNavigate}>
      <Routes>
        <Route path="/" element={<HomePage navigate={handleNavigate} />} />
        <Route
          path="/about"
          element={<AboutPage navigate={handleNavigate} />}
        />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Layout>
  );
};

export default App;