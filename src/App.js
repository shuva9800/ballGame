
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import GuestPage from './components/GuestPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdminPage />} />
                <Route path="/guest" element={<GuestPage />} />
            </Routes>
        </Router>
    );
}

export default App;
