import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Brain, Send } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate AI response (replace with actual AI logic later)
    const response = generateAIResponse(userInput, tasks);
    setAiResponse(response);
    setUserInput('');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Assistant</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <Brain className="text-purple-500 mr-2" size={24} />
          <h2 className="text-2xl font-semibold">Ask for Assistance</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            className="w-full p-2 border rounded"
            rows={4}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask about task prioritization, mission ideas, or progress suggestions..."
          ></textarea>
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 flex items-center"
          >
            <Send className="mr-2" size={18} />
            Send
          </button>
        </form>
      </div>
      {aiResponse && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">AI Response</h2>
          <p className="text-lg">{aiResponse}</p>
        </div>
      )}
    </div>
  );
};

// Placeholder function for AI response generation
function generateAIResponse(input: string, tasks: any[]): string {
  // This is a simple placeholder. Replace with actual AI logic in the future.
  const lowercaseInput = input.toLowerCase();
  if (lowercaseInput.includes('prioritize') || lowercaseInput.includes('priority')) {
    return `Based on your current tasks, I recommend prioritizing the following:
1. ${tasks[0]?.title || 'No tasks available'}
2. ${tasks[1]?.title || 'No more tasks'}
3. ${tasks[2]?.title || 'No more tasks'}`;
  } else if (lowercaseInput.includes('mission') || lowercaseInput.includes('idea')) {
    return "Here's a mission idea: Complete 3 tasks in the next 2 hours to earn a 'Productivity Burst' achievement!";
  } else if (lowercaseInput.includes('progress') || lowercaseInput.includes('suggestion')) {
    return "To improve your progress, try breaking down larger tasks into smaller, manageable subtasks. This can help you maintain momentum and see progress more frequently.";
  } else {
    return "I'm here to help with task prioritization, mission ideas, and progress suggestions. Could you please clarify your question?";
  }
}

export default AIAssistant;