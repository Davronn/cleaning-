import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout";
import Clients from "../pages/clients";
import Register from "../pages/register";
import Login from "../pages/login";
import ForgotPassword from "../pages/forgot-password";
import Profile from "../pages/profile";
import Home from "../pages/home";
import Services from "../pages/services";
import Settings from "../pages/settings";
import Orders from "../pages/orders";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/clients"
          element={
            <Layout>
              <Clients />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
        <Route
          path="/orders"
          element={
            <Layout>
              <Orders />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
