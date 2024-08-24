import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import { HomePage } from "./Pages/HomePage/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        />
        <Route
          path="/register"
          element={
            <MainLayout>
              <Register />
            </MainLayout>
          }
        />
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
