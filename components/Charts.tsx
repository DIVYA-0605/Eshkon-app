import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactECharts from "echarts-for-react";
import { RootState } from "@/Features/store";
import { updatePieData } from "@/Features/Charts/ChartSlice";
// import { updatePieData } from '@/Features/store';
import { Button, Modal } from "antd";

const Charts: React.FC = () => {
  const pieData = useSelector((state: RootState) => state.chart.pieData);
  const dispatch = useDispatch();
  const [editablePieData, setEditablePieData] = useState(pieData);
  const [isEditing, setIsEditing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  // Editing Pie Chart
  const handlePieDataChange = (index: number, value: number) => {
    const newData = [...editablePieData];
    newData[index] = value;
    setEditablePieData(newData);
  };
  // Adding data column to add data to Pie chart
  const handlePieDataAdd = () => {
    setEditablePieData([...editablePieData, 0]);
  };
  // Deleting Pie column
  const handlePieDataDelete = (index: number) => {
    const newData = [...editablePieData];
    newData.splice(index, 1);
    setEditablePieData(newData);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setModalVisible(true);
  };

  const handleSaveClick = () => {
    dispatch(updatePieData(editablePieData));
    setIsEditing(false);
    setModalVisible(false);
  };

  const pieChartOption = {
    tooltip: {},
    series: [
      {
        type: "pie",
        data: editablePieData.map((value, index) => ({
          name: `Data ${index + 1}`,
          value,
        })),
      },
    ],
  };

  const barChartOption = {
    tooltip: {},
    xAxis: {
      type: "category",
      data: [
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
        "Category 6",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "bar",
        data: [30, 20, 40, 10, 60, 78],
      },
    ],
  };

  const lineChartOption = {
    tooltip: {},
    xAxis: {
      type: "category",
      data: ["Category 1", "Category 2", "Category 3"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "line",
        data: [50, 70, 90],
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 gap-10 h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#f72ced87] scrollbar-track-gray-400/20">
      {/* Pie-chart */}
      <div className=" bg-white shadow-lg rounded-xl p-6 mr-3">
        <h2 className="text-center font-bold text-xl">Pie Chart</h2>
        <Button onClick={handleEditClick} className="bg-[#0055D1] text-white">
          Edit
        </Button>
        <Modal
          title="Edit Pie Chart Data"
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={[
            <Button key="cancel" onClick={() => setModalVisible(false)}>
              Cancel
            </Button>,
            <Button
              key="save"
              className="bg-green-400 text-white hover"
              onClick={handleSaveClick}
            >
              Save
            </Button>,
          ]}
        >
          {editablePieData.map((value, index) => (
            <div key={index}>
              <span>Data {index + 1}: </span>
              <input
                type="number"
                value={value}
                onChange={(e) =>
                  handlePieDataChange(index, parseInt(e.target.value))
                }
                className="bg-gray-300 p-2 mb-2 outline-none-none"
              />
              <Button
                onClick={() => handlePieDataDelete(index)}
                className="bg-red-600 text-white ml-2"
              >
                Delete
              </Button>
            </div>
          ))}
          <Button
            onClick={handlePieDataAdd}
            className="bg-[#0055D1] text-white"
          >
            Add
          </Button>
        </Modal>
        <ReactECharts option={pieChartOption} />
      </div>
      {/* Bar Chart */}
      <div className=" bg-white shadow-lg rounded-xl p-6 mr-3">
        <h2 className="text-center font-bold text-xl">Bar Chart</h2>
        <ReactECharts option={barChartOption} />
      </div>
      {/* Line Chart */}
      <div className=" bg-white shadow-lg rounded-xl p-6 mr-3">
        <h2 className="text-center font-bold text-xl">Line Chart</h2>
        <ReactECharts option={lineChartOption} />
      </div>
    </div>
  );
};

export default Charts;
