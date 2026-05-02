import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Prevent browser scroll restoration + avoid small "jump" on reload/layout shifts.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function Main() {
  const appBaseName = process.env.PUBLIC_URL || '/';
  return (
    <BrowserRouter basename={appBaseName}>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          exact
          element={settings.isSplash ? (
            <Splash />
          ) : (
            <Home />
          )}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/experience"
          exact
          element={
            <Experience />
          }
        />
        <Route
          path="/education"
          element={
            <Education />
          }
        />
        <Route
          path="/contact"
          element={<Contact />}
        />

        {settings.isSplash && (
          <Route
            path="/splash"
            element={<Splash />}
          />
        )}

        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="*"
          element={<Home />}
        // element={<Error404 />}
        />
      </Routes>
    </BrowserRouter>
  );
}
