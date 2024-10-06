import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  xp: number;
  rank: string;
  skills: { [key: string]: number };
  achievements: string[];
}

const initialState: UserState = {
  xp: 0,
  rank: 'Novice',
  skills: {},
  achievements: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addXP: (state, action: PayloadAction<number>) => {
      state.xp += action.payload;
      // Update rank based on XP
      if (state.xp >= 1000) state.rank = 'Expert';
      else if (state.xp >= 500) state.rank = 'Advanced';
      else if (state.xp >= 100) state.rank = 'Intermediate';
    },
    updateSkill: (state, action: PayloadAction<{ skill: string; level: number }>) => {
      state.skills[action.payload.skill] = action.payload.level;
    },
    addAchievement: (state, action: PayloadAction<string>) => {
      if (!state.achievements.includes(action.payload)) {
        state.achievements.push(action.payload);
      }
    },
  },
});

export const { addXP, updateSkill, addAchievement } = userSlice.actions;
export default userSlice.reducer;