import React from 'react';
import { Link } from 'react-router-dom';
import { Home, CheckSquare, User, Brain } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Gamification App</Link>
        <div className="flex space-x-4">
          <Link to="/" className="flex items-center"><Home className="mr-1" size={18} /> Dashboard</Link>
          <Link to="/tasks" className="flex items-center"><CheckSquare className="mr-1" size={18} /> Tasks</Link>
          <Link to="/profile" className="flex items-center"><User className="mr-1" size={18} /> Profile</Link>
          <Link to="/ai-assistant" className="flex items-center"><Brain className="mr-1" size={18} /> AI Assistant</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;