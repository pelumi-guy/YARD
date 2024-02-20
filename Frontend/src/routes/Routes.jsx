// import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { adminRoutes, basicRoutes, userRoutes } from "./index";
import PrimaryLayout from "../components/layout/PrimaryLayout";
import AdminLayout from "../components/layout/AdminLayout";
import UserLayout from "../components/layout/UserLayout";

const childRoutes = (Layout, routes) => {
  return (routes.map(({ children, path, component: Component, name }, index) => {
    return (children ? (
      // Route item with children
      children.map(({ path, component: Component, name }, index) => {
        return (<Route
          key={index}
          path={path}
          element={
            <Layout>
              <Component ComponentName={name} />
            </Layout>
          }
        />);
      })
    ) : (
      // Route item without children
      <Route
        key={index}
        path={path}
        element={
          <Layout>
            <Component ComponentName={name} />
          </Layout>
        }
      />
    ));
  }));
};

const protectedChildRoutes = (Layout, routes) => {
 return (routes.map(({ children, path, component: Component, name, isAdmin }, index) => {
    return (children ? (
      // Route item with children
      children.map(({ path, component: Component, name }, index) => {
        return (<Route
          key={index}
          path={path}
          element={
            // <ProtectedRoute isAdmin={isAdmin}>
            <Layout>
              <Component ComponentName={name} />
            </Layout>
            // </ProtectedRoute>
          }
        />);
      })
    ) : (
      // Route item without children
      <Route
        key={index}
        path={path}
        element={
          // <ProtectedRoute isAdmin={isAdmin}>
          <Layout>
            <Component ComponentName={name} />
          </Layout>
          // </ProtectedRoute>
        }
      />
    ));
  })
)};

// const testRoutes = [
//   // <Route path="*" element={<Navigate to="/" />} key={"0"} />,
//   <Route path="/" element={<PrimaryLayout><Home /></PrimaryLayout>} key={"1"} />
// ]

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {childRoutes(PrimaryLayout, basicRoutes)}
        {childRoutes(UserLayout, userRoutes)}
        {protectedChildRoutes(AdminLayout, adminRoutes)}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Router>
  )
}

export default AppRoutes;