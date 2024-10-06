import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { User, Award, Zap } from 'lucide-react';

const Profile: React.FC = () => {
  const { xp, rank, skills, achievements } = useSelector((state: RootState) => state.user);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">User Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <User className="text-blue-500 mr-2" size={24} />
          <h2 className="text-2xl font-semibold">User Stats</h2>
        </div>
        <p className="text-lg"><strong>XP:</strong> {xp}</p>
        <p className="text-lg"><strong>Rank:</strong> {rank}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <Zap className="text-yellow-500 mr-2" size={24} />
          <h2 className="text-2xl font-semibold">Skills</h2>
        </div>
        <ul className="list-disc list-inside">
          {Object.entries(skills).map(([skill, level]) => (
            <li key={skill} className="text-lg">
              {skill}: Level {level}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <Award className="text-green-500 mr-2" size={24} />
          <h2 className="text-2xl font-semibold">Achievements</h2>
        </div>
        <ul className="list-disc list-inside">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-lg">{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;