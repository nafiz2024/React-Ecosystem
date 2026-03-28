import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  { "id": 1, "name": "Student 1", "physics": 8, "chemistry": 92, "math": 51 },
  { "id": 2, "name": "Student 2", "physics": 18, "chemistry": 81, "math": 52 },
  { "id": 3, "name": "Student 3", "physics": 25, "chemistry": 70, "math": 53 },
  { "id": 4, "name": "Student 4", "physics": 32, "chemistry": 69, "math": 54 },
  { "id": 5, "name": "Student 5", "physics": 44, "chemistry": 56, "math": 55 },
  { "id": 6, "name": "Student 6", "physics": 53, "chemistry": 45, "math": 55 },
  { "id": 7, "name": "Student 7", "physics": 68, "chemistry": 32, "math": 54 },
  { "id": 8, "name": "Student 8", "physics": 75, "chemistry": 28, "math": 53 },
  { "id": 9, "name": "Student 9", "physics": 89, "chemistry": 13, "math": 52},
  { "id": 10, "name": "Student 10", "physics": 96, "chemistry": 3, "math": 51 }
]

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"physics"} stroke='red'></Line>
                <Line dataKey={"chemistry"} stroke='green'></Line>
                <Line dataKey={"math"} stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;