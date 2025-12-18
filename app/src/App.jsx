import AppRoutes from "./routes/AppRoutes";
import Logo from "./assets/logo.png";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from './pages/Landing/Landing'
import { Dashboard } from './pages/Dashboard'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default function App() {
  return <AppRoutes />;
}
