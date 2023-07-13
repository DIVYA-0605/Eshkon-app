import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/Features/store";

interface ChartState {
  pieData: number[];
}

const initialState: ChartState = {
  pieData: [30, 50, 20], // Default pie chart data
};

// Working with Update of PieChart
const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    updatePieData: (state, action: PayloadAction<number[]>) => {
      state.pieData = action.payload;
    },
  },
});

export const { updatePieData } = chartSlice.actions;
export default chartSlice.reducer;

export const selectPieData = (state: RootState) => state.chart.pieData;
