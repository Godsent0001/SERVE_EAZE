import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDiscovery from './pages/service-discovery/ServiceDiscovery'
import ServiceDetails from './pages/serviceDetail/ServiceDetails';
import ProviderDashboard from './pages/Provider/ProviderDashboard';
import SeekerDashboard from './pages/seeker/SeekerDashboard';
import Chat from './pages/Chat';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CampusMap from './pages/CampusMap';
import Login from './pages/Login';
import Register from './pages/Register';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServiceDiscovery />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
        <Route path="/seeker/dashboard" element={<SeekerDashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/map" element={<CampusMap />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
