import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addTask, updateTask, deleteTask, completeTask, Task } from '../store/slices/tasksSlice';
import { addXP } from '../store/slices/userSlice';
import { PlusCircle, Edit, Trash2, CheckCircle } from 'lucide-react';

const TaskManager: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [newTask, setNewTask] = useState<Partial<Task>>({
    title: '',
    description: '',
    category: 'Primary',
    xp: 10,
  });

  const handleAddTask = () => {
    if (newTask.title) {
      dispatch(addTask({
        id: Date.now().toString(),
        title: newTask.title,
        description: newTask.description || '',
        category: newTask.category as 'Primary' | 'Secondary',
        completed: false,
        xp: newTask.xp || 10,
      }));
      setNewTask({ title: '', description: '', category: 'Primary', xp: 10 });
    }
  };

  const handleCompleteTask = (taskId: string, xp: number) => {
    dispatch(completeTask(taskId));
    dispatch(addXP(xp));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Task Manager</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Task Title"
            className="w-full p-2 border rounded"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <textarea
            placeholder="Task Description"
            className="w-full p-2 border rounded"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          ></textarea>
          <div className="flex space-x-4">
            <select
              className="p-2 border rounded"
              value={newTask.category}
              onChange={(e) => setNewTask({ ...newTask, category: e.target.value as 'Primary' | 'Secondary' })}
            >
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
            </select>
            <input
              type="number"
              placeholder="XP"
              className="w-24 p-2 border rounded"
              value={newTask.xp}
              onChange={(e) => setNewTask({ ...newTask, xp: parseInt(e.target.value) })}
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleAddTask}
          >
            <PlusCircle className="inline-block mr-2" size={18} />
            Add Task
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Task List</h2>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-4 border rounded">
              <div>
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-600">{task.description}</p>
                <span className={`text-xs ${task.category === 'Primary' ? 'text-red-500' : 'text-blue-500'}`}>
                  {task.category}
                </span>
                <span className="text-xs ml-2">XP: {task.xp}</span>
              </div>
              <div className="flex space-x-2">
                {!task.completed && (
                  <button
                    className="text-green-500 hover:text-green-600"
                    onClick={() => handleCompleteTask(task.id, task.xp)}
                  >
                    <CheckCircle size={18} />
                  </button>
                )}
                <button
                  className="text-blue-500 hover:text-blue-600"
                  onClick={() => {/* Implement edit functionality */}}
                >
                  <Edit size={18} />
                </button>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => dispatch(deleteTask(task.id))}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;