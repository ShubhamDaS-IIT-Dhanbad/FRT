import Index from './pages/homePage.jsx';
import ChatPage from './pages/chatPage/chatPage.jsx';
import Admin from './pages/AdminPage.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import PrivateRoute from './secure/privateRoute.jsx';
import AdminPrivateRoute from './secure/adminPrivateRoute.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <ChatPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminPrivateRoute>
                <Admin />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/admin/login"
            element={
                <AdminLogin />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


