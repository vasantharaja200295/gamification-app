import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Trophy, Star, Target } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { xp, rank, achievements } = useSelector((state: RootState) => state.user);
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <Trophy className="text-yellow-500 mr-2" size={24} />
            <h2 className="text-xl font-semibold">XP & Rank</h2>
          </div>
          <p className="text-3xl font-bold">{xp} XP</p>
          <p className="text-lg">Rank: {rank}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <Target className="text-green-500 mr-2" size={24} />
            <h2 className="text-xl font-semibold">Task Progress</h2>
          </div>
          <p className="text-3xl font-bold">{completedTasks}/{totalTasks}</p>
          <p className="text-lg">Tasks Completed</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <Star className="text-blue-500 mr-2" size={24} />
            <h2 className="text-xl font-semibold">Achievements</h2>
          </div>
          <p className="text-3xl font-bold">{achievements.length}</p>
          <p className="text-lg">Unlocked</p>
        </div>
      </div>
      {/* Add more dashboard components here */}
    </div>
  );
};

export default Dashboard;