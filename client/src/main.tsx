import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css'
import Dashboard from './components/Dashboard.tsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import LandingPage from './pages/Landing.tsx';
import GetStarted from './pages/GetStarted.tsx';
import { Auth0Provider } from '@auth0/auth0-react';
import ProtectedRoute from './auth/ProtectedRoute.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/get-started' element={<GetStarted />} />
                    <Route path='/app' element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    } />
                    <Route path='/space' element={<App />} />
                    <Route path={"/space/:id/:name"} element={<App />} />
                </Routes>
            </BrowserRouter>
        </Auth0Provider>
    </React.StrictMode>,
)