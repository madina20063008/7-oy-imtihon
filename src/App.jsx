
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Components/SignUp';
import Login from './Components/SignIN'; 
import Dashboard from './Components/Dashboard';
import Teachers from './Components/Teachers';
import AddFlower from './Components/AddTeacher';
import Layout from './Components/Layout'; 


import FlowerDetail from './Components/FlowerDetail'; 

 export default function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {isAuthenticated && (
          <>
            <Route
              path="/dashboard"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
            <Route
              path="/teachers"
              element={
                <Layout>
                  <Teachers />
                </Layout>
              }
            />
            <Route
              path="/add-teacher"
              element={
                <Layout>
                  <AddFlower />
                </Layout>
              }
            />
            <Route
              path="/flower/:id"
              element={
                <Layout>
                  <FlowerDetail />
                </Layout>
              }
            />
          </>
        )}

        <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
}
