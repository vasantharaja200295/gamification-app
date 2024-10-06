import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Dashboard from './pages/Dashboard';
import TaskManager from './pages/TaskManager';
import Profile from './pages/Profile';
import AIAssistant from './pages/AIAssistant';
import Navigation from './components/common/Navigation';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navigation />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tasks" element={<TaskManager />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/ai-assistant" element={<AIAssistant />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;