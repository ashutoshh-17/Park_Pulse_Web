import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import Dashboard from './Dashboard/Dashboard'
import './App.css'


  function AnimatedRoutes() {
    const location = useLocation();
  

  return (
    <Layout>
    <Routes location={location} key={location.pathname}>

      <Route path="/dashboard" element={<Dashboard />} />
    
    </Routes>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App
